<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column footer-brand">
          <p class="footer-description">
            Estudio jurídico especializado en múltiples áreas del derecho,
            brindando asesoramiento profesional y personalizado.
          </p>
          <div class="footer-locations">
            <div class="location-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>San Miguel</span>
            </div>
            <div class="location-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>C.A.B.A.</span>
            </div>
          </div>
        </div>

        <div class="footer-column">
          <h3>Especializaciones</h3>
          <ul>
            <li><RouterLink to="/area-civil">Área Civil</RouterLink></li>
            <li><RouterLink to="/area-laboral">Área Laboral</RouterLink></li>
            <li><RouterLink to="/derecho-comercial">Derecho Comercial</RouterLink></li>
            <li><RouterLink to="/derecho-familia">Derecho de Familia</RouterLink></li>
            <li><RouterLink to="/derecho-empresarial">Derecho Empresarial</RouterLink></li>
            <li><RouterLink to="/derecho-penal">Derecho Penal</RouterLink></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Información</h3>
          <ul>
            <li><RouterLink to="/socios">Nuestro Equipo</RouterLink></li>
            <li><RouterLink to="/trabajar-con-nosotros">Trabajá con nosotros</RouterLink></li>
            <li><RouterLink to="/guia-trabajadores">Guía para trabajadores</RouterLink></li>
            <li><RouterLink to="/notas-interes">Notas de interés</RouterLink></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Contacto</h3>
          <ul class="contact-info">
            <li class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="m3 6 9 6 9-6"/>
              </svg>
              <a :href="`mailto:${contenido.contacto.email}`">{{ contenido.contacto.email }}</a>
            </li>
            <li class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div class="phones">
                <a :href="`tel:${contenido.contacto.telefonos[0]}`">{{ contenido.contacto.telefonos[0] }}</a>
                <a :href="`tel:${contenido.contacto.telefonos[1]}`">{{ contenido.contacto.telefonos[1] }}</a>
              </div>
            </li>
            <li class="contact-item addresses">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div class="address-list">
                <span>{{ contenido.contacto.direcciones[0].direccion }}</span>
                <span>{{ contenido.contacto.direcciones[1].direccion }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Estudio Duarte Muiños. Todos los derechos reservados.</p>
        <p class="footer-legal">
          Web diseñada por <b>LDC</b>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import contenido from '../data/contenido.json'
</script>

<style scoped>
.site-footer {
  background: var(--bg-dark);
  color: var(--text-light);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-3xl);
  position: relative;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-medium), transparent);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  max-width: 180px;
  margin-bottom: var(--spacing-md);
  filter: brightness(0) invert(1);
}

.footer-description {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
}

.footer-locations {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.location-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.875rem;
  color: var(--text-light);
}

.location-item svg {
  flex-shrink: 0;
  opacity: 0.7;
}

.footer-column h3 {
  font-size: 1rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-white);
  font-weight: 600;
  position: relative;
  padding-bottom: var(--spacing-xs);
}

.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--color-accent);
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: var(--spacing-xs);
}

.footer-column a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all var(--transition-base);
  display: inline-block;
}

.footer-column a:hover {
  color: var(--text-white);
  transform: translateX(4px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
}

.contact-item svg {
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0.7;
}

.contact-item a {
  color: var(--text-light);
  text-decoration: none;
  transition: color var(--transition-base);
  transform: none !important;
}

.contact-item a:hover {
  color: var(--text-white);
}

.phones,
.address-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-lg);
  text-align: center;
}

.footer-bottom p {
  color: var(--text-light);
  font-size: 0.8125rem;
  margin-bottom: var(--spacing-xs);
}

.footer-legal {
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
    margin-top: var(--spacing-2xl);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-bottom {
    padding-top: var(--spacing-md);
  }
}
</style>
