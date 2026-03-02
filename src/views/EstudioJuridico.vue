<template>
  <div class="estudio-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Estudio Jurídico</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Profesionales comprometidos con la justicia y el derecho</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-content">
          <h2 class="section-title animate-on-scroll">Nuestras Especializaciones</h2>
          <p class="section-subtitle animate-on-scroll">Te contamos sobre</p>

          <div class="especialidades-grid">
            <div v-for="(esp, index) in contenido.especializaciones" :key="esp.id"
                 class="especialidad-card animate-on-scroll"
                 :style="{ transitionDelay: `${index * 0.15}s` }">
              <div class="icon-wrapper">
                <img :src="esp.icono" :alt="esp.nombre" class="especialidad-icon" />
              </div>
              <h3>{{ esp.nombre }}</h3>
              <p>{{ esp.descripcion }}</p>
              <RouterLink :to="`/${esp.slug}`" class="btn btn-outline">Ver más</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section equipo-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Nuestro Equipo</h2>
        <p class="section-subtitle animate-on-scroll">
          Profesionales especializados en diversas áreas del derecho, comprometidos con la excelencia y la atención personalizada
        </p>
        <div class="socios-preview">
          <div v-for="(socio, index) in contenido.socios" :key="socio.id"
               class="socio-card animate-on-scroll"
               :style="{ transitionDelay: `${index * 0.2}s` }">
            <img :src="socio.foto" :alt="socio.nombre" class="socio-foto" />
            <h3>{{ socio.nombre }}</h3>
            <p class="socio-titulo">{{ socio.titulo }}</p>
            <p class="socio-uni">{{ socio.universidad }}</p>
          </div>
        </div>
        <div class="text-center animate-on-scroll" style="margin-top: var(--spacing-2xl);">
          <RouterLink to="/socios" class="btn">Ver más sobre nuestro equipo</RouterLink>
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
.especialidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
}

.especialidad-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
}

.especialidad-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.icon-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.especialidad-card:hover .icon-wrapper {
  background: var(--color-primary);
  transform: scale(1.1);
}

.especialidad-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: filter var(--transition-base);
}

.especialidad-card:hover .especialidad-icon {
  filter: brightness(0) invert(1);
}

.especialidad-card h3 {
  font-size: 1.375rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.especialidad-card p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
  min-height: 60px;
}

.equipo-section {
  background: var(--bg-primary);
}

.socios-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
}

.socio-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
}

.socio-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.socio-foto {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: var(--spacing-md);
  border: 5px solid var(--color-primary);
  transition: all var(--transition-base);
}

.socio-card:hover .socio-foto {
  transform: scale(1.05);
  border-color: var(--color-accent);
}

.socio-card h3 {
  font-size: 1.375rem;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.socio-titulo {
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  font-size: 0.9375rem;
}

.socio-uni {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 768px) {
  .especialidades-grid,
  .socios-preview {
    grid-template-columns: 1fr;
  }
}
</style>
