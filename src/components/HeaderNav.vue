<template>
  <header class="site-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <RouterLink to="/" class="logo" @click="closeMobileMenu">
          <img src="/assets/images/Logo.png" alt="Estudio Duarte Muiños" />
        </RouterLink>

        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          aria-label="Menú de navegación"
          :class="{ 'active': mobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="main-nav" :class="{ 'mobile-open': mobileMenuOpen }">
          <ul class="nav-menu">
            <li class="nav-item">
              <RouterLink to="/" @click="closeMobileMenu">Inicio</RouterLink>
            </li>
            <li class="nav-item has-dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
              <button @click="toggleDropdown" class="dropdown-toggle">
                Especializaciones
                <svg class="arrow" :class="{ open: dropdownOpen }" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <ul class="dropdown-menu" :class="{ open: dropdownOpen }">
                <li><RouterLink to="/area-civil" @click="closeMobileMenu">Área Civil</RouterLink></li>
                <li><RouterLink to="/area-laboral" @click="closeMobileMenu">Área Laboral</RouterLink></li>
                <li><RouterLink to="/derecho-comercial" @click="closeMobileMenu">Derecho Comercial</RouterLink></li>
                <li><RouterLink to="/derecho-familia" @click="closeMobileMenu">Derecho de Familia</RouterLink></li>
                <li><RouterLink to="/derecho-empresarial" @click="closeMobileMenu">Derecho Empresarial</RouterLink></li>
                <li><RouterLink to="/derecho-penal" @click="closeMobileMenu">Derecho Penal</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink to="/socios" @click="closeMobileMenu">Nuestro Equipo</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/guia-trabajadores" @click="closeMobileMenu">Guía</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contacto" @click="closeMobileMenu" class="btn-nav">Contacto</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  dropdownOpen.value = false
  document.body.style.overflow = ''
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function showDropdown() {
  if (window.innerWidth > 968) {
    dropdownOpen.value = true
  }
}

function hideDropdown() {
  if (window.innerWidth > 968) {
    dropdownOpen.value = false
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all var(--transition-base);
}

.site-header.scrolled {
  box-shadow: var(--shadow-md);
  border-bottom-color: transparent;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  gap: var(--spacing-xl);
}

.logo {
  display: flex;
  align-items: center;
  transition: opacity var(--transition-base);
}

.logo:hover {
  opacity: 0.8;
}

.logo img {
  height: 48px;
  width: auto;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--transition-base);
  border-radius: 2px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-item a,
.dropdown-toggle {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  transition: color var(--transition-base);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0;
  position: relative;
}

.nav-item a::after,
.dropdown-toggle::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-item a:hover,
.nav-item a.router-link-active,
.dropdown-toggle:hover {
  color: var(--color-primary);
}

.nav-item a:hover::after,
.nav-item a.router-link-active::after,
.dropdown-toggle:hover::after {
  width: 100%;
}

.arrow {
  transition: transform var(--transition-base);
  margin-left: 2px;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-primary);
  box-shadow: var(--shadow-lg);
  list-style: none;
  min-width: 240px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-10px);
  transition: all var(--transition-base);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  padding: var(--spacing-xs);
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu li {
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.dropdown-menu a {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: all var(--transition-fast);
  border-radius: var(--radius-sm);
}

.dropdown-menu a::after {
  display: none;
}

.dropdown-menu a:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
}

.btn-nav {
  background: var(--color-primary);
  color: var(--text-white) !important;
  padding: var(--spacing-xs) var(--spacing-lg) !important;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-base);
}

.btn-nav::after {
  display: none;
}

.btn-nav:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 968px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .main-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 320px;
    max-width: 85vw;
    height: 100vh;
    background: var(--bg-primary);
    transition: right var(--transition-slow);
    overflow-y: auto;
    box-shadow: var(--shadow-xl);
    z-index: 1000;
  }

  .main-nav.mobile-open {
    right: 0;
  }

  .main-nav::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 320px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-slow);
    pointer-events: none;
  }

  .main-nav.mobile-open::before {
    opacity: 1;
    visibility: visible;
  }

  .nav-menu {
    flex-direction: column;
    gap: 0;
    padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-lg);
    align-items: stretch;
  }

  .nav-item {
    border-bottom: 1px solid var(--border-light);
  }

  .nav-item:last-child {
    border-bottom: none;
    margin-top: var(--spacing-md);
  }

  .nav-item a,
  .dropdown-toggle {
    padding: var(--spacing-md) 0;
    width: 100%;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: none;
    margin-top: 0;
    background: var(--bg-secondary);
    border: none;
    border-radius: 0;
  }

  .dropdown-menu.open {
    display: block;
  }

  .has-dropdown:hover .dropdown-menu {
    display: none;
  }

  .dropdown-menu.open {
    display: block;
  }

  .dropdown-menu a {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .btn-nav {
    text-align: center;
    margin-top: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .logo img {
    height: 40px;
  }

  .header-content {
    padding: var(--spacing-sm) 0;
  }
}
</style>
