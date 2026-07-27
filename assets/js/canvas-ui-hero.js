/*
 * Canvas UI-inspired hero layer for the existing Hugo Blox slider.
 * The carousel remains fully functional if Canvas, JavaScript, or motion is unavailable.
 */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  function initialise() {
    const slider = document.querySelector(".wg-slider");
    if (!slider || slider.dataset.canvasHeroReady) return;

    const contextCanvas = document.createElement("canvas");
    const context = contextCanvas.getContext("2d");
    if (!context) return;

    slider.dataset.canvasHeroReady = "true";
    contextCanvas.className = "canvas-ui-hero";
    contextCanvas.setAttribute("aria-hidden", "true");
    slider.append(contextCanvas);

    const state = {
      width: 0,
      height: 0,
      waves: [],
      pointer: null,
      lastPointerAt: 0,
      sweepStarted: performance.now(),
      sweepStrength: 1,
      frame: 0,
      visible: true,
      lastTime: performance.now(),
    };

    function resize() {
      const rect = slider.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      state.width = Math.max(1, rect.width);
      state.height = Math.max(1, rect.height);
      contextCanvas.width = Math.round(state.width * ratio);
      contextCanvas.height = Math.round(state.height * ratio);
      contextCanvas.style.width = `${state.width}px`;
      contextCanvas.style.height = `${state.height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function addWave(x, y, strength = 1) {
      state.waves.push({ x, y, strength, started: performance.now() });
      if (state.waves.length > 9) state.waves.shift();
    }

    function drawGrid(time) {
      const horizon = state.height * 0.68;
      const spacing = Math.max(44, Math.round(state.width / 24));
      context.lineWidth = 1;
      context.strokeStyle = "rgba(69, 172, 255, 0.18)";

      for (let y = horizon; y < state.height + spacing; y += spacing) {
        const depth = (y - horizon) / Math.max(state.height - horizon, 1);
        const amplitude = 5 + depth * 11;
        context.beginPath();
        for (let x = 0; x <= state.width + 16; x += 16) {
          const phase = time * 0.0015 + x * 0.013 + depth * 3;
          const wave = Math.sin(phase) * amplitude;
          if (x === 0) context.moveTo(x, y + wave);
          else context.lineTo(x, y + wave);
        }
        context.globalAlpha = 0.18 + depth * 0.42;
        context.stroke();
      }

      const vanishingX = state.pointer ? state.pointer.x : state.width * 0.54;
      for (let x = -state.width; x < state.width * 2; x += spacing) {
        context.beginPath();
        context.moveTo(vanishingX, horizon);
        context.lineTo(x, state.height);
        context.globalAlpha = 0.2;
        context.stroke();
      }
      context.globalAlpha = 1;
    }

    function drawWave(wave, now) {
      const age = (now - wave.started) / 1000;
      if (age > 1.8) return false;
      const radius = 40 + age * 470 * wave.strength;
      const alpha = (1 - age / 1.8) * Math.min(wave.strength, 1.4);
      const gradient = context.createRadialGradient(wave.x, wave.y, Math.max(0, radius - 75), wave.x, wave.y, radius + 55);
      gradient.addColorStop(0, "rgba(94, 211, 255, 0)");
      gradient.addColorStop(0.45, `rgba(94, 211, 255, ${alpha * 0.22})`);
      gradient.addColorStop(0.62, `rgba(206, 244, 255, ${alpha * 0.9})`);
      gradient.addColorStop(0.78, `rgba(70, 145, 255, ${alpha * 0.24})`);
      gradient.addColorStop(1, "rgba(70, 145, 255, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(wave.x, wave.y, radius + 55, 0, Math.PI * 2);
      context.fill();
      return true;
    }

    function drawSweep(now) {
      const elapsed = (now - state.sweepStarted) / 1000;
      if (elapsed > 1.15) return;
      const position = (elapsed / 1.15) * (state.width + 260) - 130;
      const alpha = (1 - elapsed / 1.15) * state.sweepStrength;
      const gradient = context.createLinearGradient(position - 160, 0, position + 160, 0);
      gradient.addColorStop(0, "rgba(12, 71, 176, 0)");
      gradient.addColorStop(0.42, `rgba(54, 157, 255, ${alpha * 0.22})`);
      gradient.addColorStop(0.5, `rgba(220, 249, 255, ${alpha * 0.7})`);
      gradient.addColorStop(0.58, `rgba(54, 157, 255, ${alpha * 0.22})`);
      gradient.addColorStop(1, "rgba(12, 71, 176, 0)");
      context.fillStyle = gradient;
      context.fillRect(position - 160, 0, 320, state.height);
    }

    function render(now) {
      if (!state.visible) {
        state.frame = 0;
        return;
      }
      const delta = Math.min(now - state.lastTime, 60);
      state.lastTime = now;
      context.clearRect(0, 0, state.width, state.height);
      context.globalCompositeOperation = "screen";
      drawGrid(now + delta);
      state.waves = state.waves.filter((wave) => drawWave(wave, now));
      drawSweep(now);
      context.globalCompositeOperation = "source-over";
      state.frame = requestAnimationFrame(render);
    }

    function wake() {
      if (!state.frame && state.visible) state.frame = requestAnimationFrame(render);
    }

    function onPointerMove(event) {
      const now = performance.now();
      const rect = slider.getBoundingClientRect();
      state.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (now - state.lastPointerAt > 110) {
        addWave(state.pointer.x, state.pointer.y, 0.34);
        state.lastPointerAt = now;
      }
      wake();
    }

    function onPointerDown(event) {
      const rect = slider.getBoundingClientRect();
      addWave(event.clientX - rect.left, event.clientY - rect.top, 1.35);
      wake();
    }

    function onSlide() {
      state.sweepStarted = performance.now();
      state.sweepStrength = 1.25;
      addWave(state.width * 0.5, state.height * 0.55, 1.55);
      wake();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(slider);
    const visibilityObserver = new IntersectionObserver((entries) => {
      state.visible = entries[entries.length - 1].isIntersecting;
      if (state.visible) wake();
    }, { threshold: 0.08 });
    visibilityObserver.observe(slider);

    slider.addEventListener("pointermove", onPointerMove, { passive: true });
    slider.addEventListener("pointerdown", onPointerDown, { passive: true });
    slider.addEventListener("slide.bs.carousel", onSlide);
    if (window.jQuery) window.jQuery(slider).on("slide.bs.carousel", onSlide);
    resize();
    wake();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialise, { once: true });
  else initialise();
})();
