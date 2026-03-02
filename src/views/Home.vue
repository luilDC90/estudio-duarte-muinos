<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">{{ contenido.sitio.nombre }}</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">{{ contenido.sitio.descripcion }}</p>
        <div class="hero-buttons fade-in-up" style="animation-delay: 0.6s;">
          <RouterLink to="/contacto" class="btn">Consulta Gratuita</RouterLink>
          <RouterLink to="/socios" class="btn btn-secondary">Conocer al Equipo</RouterLink>
        </div>
      </div>
    </section>

    <!-- Especializaciones -->
<section class="page-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Nuestras Especializaciones</h2>
        <p class="section-subtitle animate-on-scroll">
          Contamos con amplia experiencia en diversas áreas del derecho,
          brindando asesoramiento profesional y personalizado
        </p>

        <div class="cards-grid">
          <!-- Área Civil -->
          <div
            v-for="(esp, index) in contenido.especializaciones"
            :key="esp.id"
            class="card animate-on-scroll"
            :style="{ transitionDelay: `${index * 0.15}s` }"
          >
            <div class="card-icon-wrapper">
              <svg 
                v-if="esp.id === 'area-civil'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <!-- Área Laboral: Fábrica -->
              <svg 
                v-else-if="esp.id === 'area-laboral'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21h18" />
                <path d="M5 21v-12l5 4v-4l5 4h4" />
                <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
                <path d="M9 17h1" />
                <path d="M14 17h1" />
              </svg>

              <!-- Derecho Comercial: Certificado -->
              <svg 
                v-else-if="esp.id === 'derecho-comercial'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <path d="M6 9l12 0" />
                <path d="M6 12l3 0" />
                <path d="M6 15l2 0" />
              </svg>

              <!-- Derecho Familia: Familia -->
              <svg 
                v-else-if="esp.id === 'derecho-familia'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round"
              >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>

              <!-- Derecho Empresarial: Rascacielos -->
              <svg 
                v-else-if="esp.id === 'derecho-empresarial'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l18 0" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <path d="M9 9l0 .01" />
                <path d="M9 12l0 .01" />
                <path d="M9 15l0 .01" />
                <path d="M9 18l0 .01" />
              </svg>

              <!-- Derecho Penal: Escudo -->
              <svg 
                v-else-if="esp.id === 'derecho-penal'" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round"
              >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" /><path d="M6 9l4 4" /><path d="M13 10l-4 -4" /><path d="M3 21h7" /><path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0" /></svg>
            </div>
            <h3>{{ esp.nombre }}</h3>
            <p>{{ esp.descripcion }}</p>
            <RouterLink :to="`/${esp.slug}`" class="card-link">
              Ver más
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round"/>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Por qué elegirnos -->
    <section class="page-section features-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">¿Por qué elegirnos?</h2>
        <div class="features-grid">
          <div class="feature-item animate-on-scroll">
            <div class="feature-icon">
              <!-- <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2v20M2 12h20" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="8"/>
              </svg> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>
            </div>
            <h3>Experiencia</h3>
            <p>Años de trayectoria en múltiples áreas del derecho</p>
          </div>

          <div class="feature-item animate-on-scroll" style="transition-delay: 0.15s;">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Atención Personalizada</h3>
            <p>Cada caso es único y merece atención dedicada</p>
          </div>

          <div class="feature-item animate-on-scroll" style="transition-delay: 0.3s;">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Disponibilidad 24hs</h3>
            <p>Guardias las 24 horas para urgencias</p>
          </div>

          <div class="feature-item animate-on-scroll" style="transition-delay: 0.45s;">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-linecap="round"/>
                <path d="M22 4L12 14.01l-3-3" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Profesionalismo</h3>
            <p>Equipo de abogados altamente calificados</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="page-section cta-section">
      <div class="container-narrow">
        <div class="cta-content animate-on-scroll">
          <h2>¿Necesitás asesoramiento legal?</h2>
          <p>Contactanos hoy para una consulta gratuita. Nuestro equipo está listo para ayudarte.</p>
          <div class="cta-buttons">
            <RouterLink to="/contacto" class="btn">Contactar Ahora</RouterLink>
            <a :href="`tel:${contenido.contacto.telefonos[0]}`" class="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round"/>
              </svg>
              {{ contenido.contacto.telefonos[0] }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import contenido from '../data/contenido.json'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()
</script>

<style scoped>
.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.card-icon-wrapper {
  width: 64px;
  height: 64px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-base);
}

.card:hover .card-icon-wrapper {
  background: var(--color-primary);
}

.card:hover .card-icon-wrapper svg {
  stroke: var(--text-white);
}

.card-icon-svg {
  width: 32px;
  height: 32px;
  stroke: var(--color-primary);
  transition: stroke var(--transition-base);
}

.card:hover .card-icon-svg {
  stroke: var(--text-white);
}

.card-link svg {
  transition: transform var(--transition-base);
}

.card-link:hover svg {
  transform: translateX(4px);
}

/* Features Section */
.features-section {
  background: var(--bg-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
}

.feature-item {
  text-align: center;
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.feature-item:hover {
  background: var(--bg-secondary);
  transform: translateY(-4px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.feature-item:hover .feature-icon {
  background: var(--color-primary);
  transform: scale(1.1);
}

.feature-icon svg {
  width: 32px;
  height: 32px;
  stroke: var(--color-primary);
  transition: stroke var(--transition-base);
}

.feature-item:hover .feature-icon svg {
  stroke: var(--text-white);
}

.feature-item h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--text-white);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
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

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: var(--spacing-md);
  color: var(--text-white);
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
