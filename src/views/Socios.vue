<template>
  <div class="socios-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Conocé nuestro Equipo</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Profesionales comprometidos con la excelencia</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div v-for="(socio, index) in contenido.socios" :key="socio.id" class="socio-detail animate-on-scroll" :style="{ transitionDelay: `${index * 0.2}s` }">
          <div class="socio-header">
            <div class="socio-foto-container">
              <img :src="socio.foto" :alt="socio.nombre" class="socio-foto-grande" />
            </div>
            <div class="socio-info">
              <h2>{{ socio.nombre }}</h2>
              <p class="socio-titulo-principal">{{ socio.titulo }}</p>
              <div class="socio-badges">
                <span class="badge">{{ socio.universidad }}</span>
                <span v-if="socio.posgrado" class="badge badge-accent">Posgrado UBA</span>
                <span v-if="socio.magister" class="badge badge-accent">Magister</span>
              </div>
            </div>
          </div>

          <div class="socio-body">
            <div class="socio-section">
              <div class="section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-linecap="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke-linecap="round"/>
                </svg>
                <h3>Inscripciones Profesionales</h3>
              </div>
              <ul class="info-list">
                <li v-for="(inscripcion, idx) in socio.inscripciones" :key="idx">
                  {{ inscripcion }}
                </li>
              </ul>
            </div>

            <div v-if="socio.experienciaDocente" class="socio-section">
              <div class="section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>Experiencia Docente</h3>
              </div>
              <ul class="info-list">
                <li v-for="(exp, idx) in socio.experienciaDocente" :key="idx">
                  {{ exp }}
                </li>
              </ul>
            </div>

            <div class="socio-section experience-section">
              <div class="section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke-linecap="round"/>
                </svg>
                <h3>Experiencia Profesional</h3>
              </div>
              <p class="experience-text">{{ socio.experiencia }}</p>
            </div>
          </div>
        </div>

        <div class="cta-box animate-on-scroll">
          <div class="cta-content">
            <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <path d="M20 8v6M23 11h-6"/>
            </svg>
            <h3>¿Querés formar parte de nuestro equipo?</h3>
            <p>Envianos tu CV y sumáte a nuestro equipo de profesionales</p>
            <RouterLink to="/trabajar-con-nosotros" class="btn">Enviar CV</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import contenido from '../data/contenido.json'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()
</script>

<style scoped>
.socio-detail {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.socio-detail:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.socio-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 2px solid var(--border-light);
}

.socio-foto-container {
  position: relative;
}

.socio-foto-grande {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 5px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
}

.socio-detail:hover .socio-foto-grande {
  transform: scale(1.05);
  border-color: var(--color-accent);
}

.socio-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-sm);
}

.socio-info h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.socio-titulo-principal {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.socio-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
}

.badge-accent {
  background: var(--color-primary);
  color: var(--text-white);
  border-color: var(--color-primary);
}

.socio-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.socio-section {
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.socio-section:hover {
  background: var(--bg-tertiary);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.section-header svg {
  stroke: var(--color-primary);
  flex-shrink: 0;
}

.section-header h3 {
  font-size: 1.125rem;
  color: var(--text-primary);
  margin: 0;
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.info-list li {
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9375rem;
}

.info-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
}

.experience-section {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
}

.experience-text {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.9375rem;
  margin: 0;
}

/* CTA Box */
.cta-box {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--text-white);
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

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-md);
  stroke: var(--text-white);
  opacity: 0.9;
}

.cta-box h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--spacing-sm);
  color: var(--text-white);
}

.cta-box p {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-box .btn {
  background: var(--text-white);
  color: var(--color-primary);
  border-color: var(--text-white);
}

.cta-box .btn:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .socio-header {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }

  .socio-foto-grande {
    width: 160px;
    height: 160px;
  }

  .socio-info {
    align-items: center;
  }

  .socio-badges {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .socio-detail {
    padding: var(--spacing-lg);
  }

  .socio-header {
    gap: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
  }

  .socio-section {
    padding: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .socio-foto-grande {
    width: 140px;
    height: 140px;
  }

  .info-list li {
    font-size: 0.875rem;
  }
}
</style>
