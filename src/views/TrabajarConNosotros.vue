<template>
  <div class="trabajar-page">
    <section class="hero-section">
      <div class="container">
        <h1 class="fade-in-up">Envianos tu CV</h1>
        <p class="fade-in-up" style="animation-delay: 0.3s;">Formá parte de nuestro equipo de profesionales</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-content">
          <div class="intro-text animate-on-scroll">
            <h2>¿Por qué trabajar con nosotros?</h2>
            <p style="color: aliceblue;">En Estudio Duarte Muiños buscamos constantemente ampliar nuestro equipo de profesionales. Valoramos el talento, la dedicación y el compromiso con la excelencia en el servicio legal.</p>
            <p style="color: aliceblue;">Si sos abogado/a o estudiante avanzado de Derecho y querés formar parte de nuestro estudio, envianos tu CV.</p>
          </div>

          <div class="cv-form animate-on-scroll" style="transition-delay: 0.2s;">
            <h2>Formulario de CV</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" v-model="form.nombre" required />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" id="email" v-model="form.email" required />
                </div>

                <div class="form-group">
                  <label for="telefono">Teléfono *</label>
                  <input type="tel" id="telefono" v-model="form.telefono" required />
                </div>
              </div>

              <div class="form-group">
                <label for="area">Área de especialización *</label>
                <select id="area" v-model="form.area" required>
                  <option value="">Seleccioná un área</option>
                  <option value="civil">Área Civil</option>
                  <option value="laboral">Área Laboral</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="comercial">Derecho Comercial</option>
                  <option value="familia">Derecho de Familia</option>
                  <option value="empresarial">Derecho Empresarial</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div class="form-group">
                <label for="mensaje">Presentación y experiencia *</label>
                <textarea id="mensaje" v-model="form.mensaje" placeholder="Contanos sobre tu experiencia, formación académica y por qué te gustaría trabajar con nosotros..." required></textarea>
              </div>

              <div class="form-group">
                <label for="cv">Adjuntar CV (opcional)</label>
                <input type="file" id="cv" @change="handleFileChange" accept=".pdf,.doc,.docx" />
                <small>Formatos aceptados: PDF, DOC, DOCX (Máx. 5MB)</small>
              </div>

              <button type="submit" class="btn">Enviar CV</button>
            </form>
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

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  area: '',
  mensaje: '',
  archivo: null
})

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file && file.size <= 5 * 1024 * 1024) { // 5MB
    form.value.archivo = file
  } else {
    alert('El archivo es demasiado grande. Máximo 5MB.')
    event.target.value = ''
  }
}

function handleSubmit() {
  const subject = encodeURIComponent(`CV - ${form.value.nombre} - ${form.value.area}`)
  const body = encodeURIComponent(
    `Nombre: ${form.value.nombre}\n` +
    `Email: ${form.value.email}\n` +
    `Teléfono: ${form.value.telefono}\n` +
    `Área: ${form.value.area}\n\n` +
    `Presentación:\n${form.value.mensaje}\n\n` +
    `Nota: El CV se adjuntó por separado.`
  )

  window.location.href = `mailto:${contenido.contacto.email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.intro-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--text-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.intro-text::before {
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

.intro-text h2 {
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 1;
  color: var(--text-white);
}

.intro-text p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: var(--spacing-sm);
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.cv-form {
  background: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  max-width: 800px;
  margin: 0 auto;
}

.cv-form h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #1a1a1a;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group small {
  display: block;
  margin-top: 5px;
  color: #888;
  font-size: 13px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .intro-text,
  .cv-form {
    padding: 25px;
  }
}
</style>
