<template>
  <div class="especializacion-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">{{ especializacion.nombre }}</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">{{ especializacion.descripcion }}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-content">
          <div class="intro-text animate-on-scroll">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>{{ especializacion.introduccion }}</p>
          </div>

          <div class="section-header animate-on-scroll">
            <h2 class="section-title">Servicios</h2>
          </div>
          <ul class="services-list">
            <li v-for="(servicio, index) in especializacion.servicios" :key="index"
                class="animate-on-scroll"
                :style="{ transitionDelay: `${index * 0.1}s` }">
              {{ servicio }}
            </li>
          </ul>

          <div class="cta-box animate-on-scroll">
            <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="m3 6 9 6 9-6"/>
            </svg>
            <h3>¿Necesitás asesoramiento en {{ especializacion.nombre }}?</h3>
            <p>Contactanos para una consulta gratuita</p>
            <RouterLink to="/contacto" class="btn">Contactar Ahora</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import contenido from '../data/contenido.json'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const especializacion = contenido.especializaciones.find(e => e.id === 'area-laboral')

useScrollAnimation()
</script>

<style scoped>
.intro-text {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
  border-left: 4px solid var(--color-primary);
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.intro-text svg {
  flex-shrink: 0;
  stroke: var(--color-primary);
  margin-top: 2px;
}

.intro-text p {
  line-height: 1.8;
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.section-header svg {
  stroke: var(--color-primary);
  flex-shrink: 0;
}

.section-header .section-title {
  margin-bottom: 0;
}

.section-header .section-title::after {
  display: none;
}

.cta-box {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--text-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
  margin-top: var(--spacing-2xl);
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

.cta-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-md);
  stroke: var(--text-white);
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.cta-box h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--spacing-sm);
  color: var(--text-white);
  position: relative;
  z-index: 1;
}

.cta-box p {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.95);
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
</style>
