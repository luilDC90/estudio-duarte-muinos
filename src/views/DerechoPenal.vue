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
          <div class="section-header animate-on-scroll">
            <h2 class="section-title">Servicios</h2>
          </div>
          <div class="servicios-columns">
            <div class="column">
              <ul class="services-list-simple">
                <li v-for="(servicio, index) in especializacion.servicios.columna1" :key="index"
                    class="animate-on-scroll"
                    :style="{ transitionDelay: `${index * 0.1}s` }">
                  {{ servicio }}
                </li>
              </ul>
            </div>
            <div class="column">
              <ul class="services-list-simple">
                <li v-for="(servicio, index) in especializacion.servicios.columna2" :key="index"
                    class="animate-on-scroll"
                    :style="{ transitionDelay: `${(index + especializacion.servicios.columna1.length) * 0.1}s` }">
                  {{ servicio }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section casos-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Casos Relevantes</h2>
        <p class="section-subtitle animate-on-scroll">Algunos de los casos en los que hemos trabajado</p>

        <div class="casos-grid">
          <div v-for="(caso, index) in especializacion.casosRelevantes" :key="index"
               class="caso-card animate-on-scroll"
               :style="{ transitionDelay: `${index * 0.2}s` }">
            <img :src="caso.imagen" :alt="caso.titulo" class="caso-imagen" />
            <h3>{{ caso.titulo }}</h3>
            <p>{{ caso.descripcion }}</p>
          </div>
        </div>

        <div class="cta-box animate-on-scroll">
          <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round"/>
          </svg>
          <h3>¿Necesitás asesoramiento en {{ especializacion.nombre }}?</h3>
          <p>Contamos con guardias las 24hs para urgencias</p>
          <RouterLink to="/contacto" class="btn">Contactar Ahora</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import contenido from '../data/contenido.json'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const especializacion = contenido.especializaciones.find(e => e.id === 'derecho-penal')

useScrollAnimation()
</script>

<style scoped>
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

.servicios-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-xl);
}

.services-list-simple {
  list-style: none;
}

.services-list-simple li {
  background: var(--bg-secondary);
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
  transition: all var(--transition-base);
  color: var(--text-secondary);
}

.services-list-simple li:hover {
  transform: translateX(8px);
  background: var(--bg-primary);
  box-shadow: var(--shadow-md);
  border-left-width: 6px;
}

.casos-section {
  background: var(--bg-primary);
}

.casos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
}

.caso-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
}

.caso-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.caso-imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.caso-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.caso-card p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin: 0;
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

@media (max-width: 768px) {
  .servicios-columns {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .casos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
