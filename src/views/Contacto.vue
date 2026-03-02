<template>
  <div class="contacto-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Contactate con nosotros</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Hacenos tu consulta y a la brevedad nos estaremos comunicando con vos para asesorarte</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="contacto-grid">
          <div class="contacto-form animate-on-scroll">
            <h2>Envianos tu consulta</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" v-model="form.nombre" required />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>

              <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="tel" id="telefono" v-model="form.telefono" />
              </div>

              <div class="form-group">
                <label for="asunto">Asunto *</label>
                <input type="text" id="asunto" v-model="form.asunto" required />
              </div>

              <div class="form-group">
                <label for="mensaje">Contanos tu caso... *</label>
                <textarea id="mensaje" v-model="form.mensaje" required></textarea>
              </div>

              <button type="submit" class="btn">Enviar consulta</button>
            </form>
          </div>

          <div class="contacto-info animate-on-scroll" style="transition-delay: 0.2s;">
            <h2>Información de contacto</h2>

            <div class="info-box">
              <div class="info-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"/>
                  <path d="m3 6 9 6 9-6"/>
                </svg>
                <h3>Email</h3>
              </div>
              <p>
                <a :href="`mailto:${contenido.contacto.email}`">
                  {{ contenido.contacto.email }}
                </a>
              </p>
            </div>

            <div class="info-box">
              <div class="info-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h3>Direcciones</h3>
              </div>
              <div v-for="(dir, index) in contenido.contacto.direcciones" :key="index" class="direccion-item">
                <p class="direccion-lugar">{{ dir.lugar }}:</p>
                <p>{{ dir.direccion }}</p>
              </div>
            </div>

            <div class="info-box">
              <div class="info-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h3>Teléfonos</h3>
              </div>
              <p v-for="(tel, index) in contenido.contacto.telefonos" :key="index">
                <a :href="`tel:${tel}`">{{ tel }}</a>
              </p>
            </div>

            <div class="info-box">
              <div class="info-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <h3>Horarios</h3>
              </div>
              <p><strong>Guardias las 24hs</strong> para urgencias</p>
              <p>Atención en oficina: Lunes a Viernes</p>
            </div>
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

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: ''
})

function handleSubmit() {
  // Aquí se implementaría el envío del formulario
  const subject = encodeURIComponent(form.value.asunto)
  const body = encodeURIComponent(
    `Nombre: ${form.value.nombre}\n` +
    `Email: ${form.value.email}\n` +
    `Teléfono: ${form.value.telefono}\n\n` +
    `Mensaje:\n${form.value.mensaje}`
  )

  window.location.href = `mailto:${contenido.contacto.email}?subject=${subject}&body=${body}`
}

useScrollAnimation()
</script>

<style scoped>
.contacto-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-2xl);
  max-width: 1200px;
  margin: 0 auto;
}

.contacto-form,
.contacto-info {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-light);
}

.contacto-form h2,
.contacto-info h2 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xl);
  color: var(--text-primary);
}

.info-box {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
}

.info-box:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.info-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.info-header svg {
  stroke: var(--color-primary);
  flex-shrink: 0;
}

.info-header h3 {
  font-size: 1.125rem;
  margin: 0;
  color: var(--text-primary);
}

.info-box p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: var(--spacing-xs);
}

.direccion-item {
  margin-bottom: var(--spacing-sm);
}

.direccion-item:last-child {
  margin-bottom: 0;
}

.direccion-lugar {
  font-weight: 600;
  color: var(--text-primary) !important;
  margin-bottom: 2px !important;
}

.info-box a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

.info-box a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

@media (max-width: 968px) {
  .contacto-grid {
    grid-template-columns: 1fr;
  }

  .contacto-form,
  .contacto-info {
    padding: var(--spacing-xl);
  }
}
</style>
