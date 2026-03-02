<template>
  <div class="notas-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Notas de Interés</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Enlaces útiles a instituciones y organismos oficiales</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-content">
          <div class="intro-text animate-on-scroll">
            <p>
              En esta sección encontrarás enlaces a las principales instituciones y organismos relacionados con el derecho y la justicia en Argentina.
              Estos recursos pueden ser de utilidad para consultas, trámites y obtener información actualizada.
            </p>
          </div>

          <div class="enlaces-grid">
            <a
              v-for="(enlace, index) in contenido.enlacesInteres"
              :key="index"
              :href="enlace.url"
              target="_blank"
              rel="noopener noreferrer"
              class="enlace-card animate-on-scroll"
              :style="{ transitionDelay: `${index * 0.15}s` }"
            >
              <div class="enlace-imagen">
                <img :src="enlace.imagen" :alt="enlace.nombre" />
              </div>
              <div class="enlace-info">
                <h3>{{ enlace.nombre }}</h3>
                <span class="enlace-link">Visitar sitio →</span>
              </div>
            </a>
          </div>

          <div class="info-adicional animate-on-scroll">
            <h2>Información Adicional</h2>
            <p>
              Estos enlaces son proporcionados como un servicio a nuestros clientes y visitantes.
              El Estudio Duarte Muiños no se hace responsable del contenido de sitios externos.
            </p>
            <p>
              Si necesitás ayuda para realizar trámites o gestiones ante estos organismos,
              nuestro equipo puede asistirte y asesorarte.
            </p>
          </div>

          <div class="cta-box animate-on-scroll">
            <h3>¿Necesitás ayuda con trámites o gestiones?</h3>
            <p style="color: aliceblue;">Contactanos y te asesoramos sin cargo</p>
            <RouterLink to="/contacto" class="btn">Contactar</RouterLink>
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
.intro-text {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
  border-left: 4px solid var(--color-primary);
}

.intro-text p {
  line-height: 1.8;
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

.enlaces-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.enlace-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}

.enlace-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.enlace-imagen {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.enlace-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.enlace-info {
  padding: 25px;
}

.enlace-info h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.enlace-link {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
}

.enlace-card:hover .enlace-link {
  text-decoration: underline;
}

.info-adicional {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 40px;
}

.info-adicional h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.info-adicional p {
  line-height: 1.8;
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
}

.cta-box {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--text-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
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
  .enlaces-grid {
    grid-template-columns: 1fr;
  }
}
</style>
