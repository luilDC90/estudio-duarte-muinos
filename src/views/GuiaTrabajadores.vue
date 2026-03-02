<template>
  <div class="guia-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Guía para trabajadores</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Respuestas a preguntas frecuentes sobre derechos laborales</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-content">
          <div class="intro-box animate-on-scroll">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>
              Esta guía tiene como objetivo brindarte información básica sobre tus derechos laborales.
              Si tenés alguna duda específica sobre tu situación, no dudes en contactarnos para una consulta personalizada.
            </p>
          </div>

          <div class="preguntas-container">
            <div v-for="(item, index) in contenido.guiaTrabajadores" :key="index"
                 class="pregunta-item animate-on-scroll"
                 :style="{ transitionDelay: `${index * 0.1}s` }">
              <button @click="togglePregunta(index)" class="pregunta-toggle">
                <h3>{{ item.pregunta }}</h3>
                <span class="toggle-icon" :class="{ open: preguntasAbiertas[index] }">▼</span>
              </button>
              <transition name="slide">
                <div v-show="preguntasAbiertas[index]" class="respuesta">
                  <p>{{ item.respuesta }}</p>
                </div>
              </transition>
            </div>
          </div>

          <div class="cta-box animate-on-scroll">
            <h3>¿Necesitás asesoramiento legal?</h3>
            <p style="color: aliceblue;">Nuestros abogados especializados en Derecho Laboral pueden ayudarte</p>
            <RouterLink to="/contacto" class="btn">Consultar ahora</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import contenido from '../data/contenido.json'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

const preguntasAbiertas = ref({})

function togglePregunta(index) {
  preguntasAbiertas.value[index] = !preguntasAbiertas.value[index]
}
</script>

<style scoped>
.intro-box {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
  border-left: 4px solid var(--color-primary);
}

.intro-box p {
  line-height: 1.8;
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.preguntas-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.pregunta-item {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

.pregunta-item:hover {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.pregunta-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.3s;
}

.pregunta-toggle:hover {
  background: #f9f9f9;
}

.pregunta-toggle h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
  padding-right: 20px;
}

.toggle-icon {
  font-size: 14px;
  color: var(--color-primary);
  transition: transform var(--transition-base);
  flex-shrink: 0;
}

.toggle-icon.open {
  transform: rotate(180deg);
}

.respuesta {
  padding: 0 25px 25px 25px;
  background: #fafafa;
}

.respuesta p {
  line-height: 1.8;
  color: #555;
  font-size: 15px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.cta-box {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--text-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
  margin-top: var(--spacing-3xl);
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.cta-box h3 {
  font-size: clamp(1.5rem, 3vw, 1.625rem);
  margin-bottom: var(--spacing-sm);
  position: relative;
  z-index: 1;
  color: var(--text-white);
}

.cta-box p {
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.cta-box .btn {
  background: var(--text-white);
  color: var(--color-primary);
  border-color: var(--text-white);
  position: relative;
  z-index: 1;
}

.cta-box .btn:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .pregunta-toggle {
    padding: 15px 20px;
  }

  .pregunta-toggle h3 {
    font-size: 16px;
  }

  .respuesta {
    padding: 0 20px 20px 20px;
  }
}
</style>
