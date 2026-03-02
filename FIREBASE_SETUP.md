# 🔥 Guía de Configuración Firebase Hosting

## Paso a Paso para publicar el sitio

### 1️⃣ Crear proyecto en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en "Agregar proyecto" o "Add project"
3. Ingresa el nombre del proyecto: **estudio-duarte-muinos** (o el que prefieras)
4. Click en "Continuar"
5. (Opcional) Desactiva Google Analytics si no lo necesitás
6. Click en "Crear proyecto"
7. Espera a que se cree el proyecto y click en "Continuar"

### 2️⃣ Configurar Firebase Hosting

1. En el panel lateral izquierdo, busca "Hosting" en la sección "Build"
2. Click en "Comenzar" o "Get started"
3. Seguí los pasos mostrados (no es necesario instalar nada, ya lo tenemos configurado)

### 3️⃣ Actualizar ID del proyecto (si usaste otro nombre)

Si elegiste un nombre diferente a "estudio-duarte-muinos":

1. Abre el archivo `.firebaserc` en el proyecto
2. Cambia el valor de `"default"` por el ID de tu proyecto:

```json
{
  "projects": {
    "default": "tu-id-de-proyecto-aqui"
  }
}
```

### 4️⃣ Login en Firebase

Ejecutá en la terminal:

```bash
npm run firebase:login
```

Esto abrirá tu navegador para que te autentiques con tu cuenta de Google.

**Nota:** Si ya estás logueado, verás un mensaje confirmándolo.

### 5️⃣ Deployar el sitio

Ejecutá en la terminal:

```bash
npm run deploy
```

Este comando:
1. Compila el proyecto (ejecuta `npm run build`)
2. Sube los archivos a Firebase Hosting
3. Te muestra la URL donde está publicado

### 6️⃣ Resultado

Una vez completado el deploy, verás algo como:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/estudio-duarte-muinos/overview
Hosting URL: https://estudio-duarte-muinos.web.app
```

🎉 ¡Tu sitio está en vivo!

---

## 🔄 Actualizaciones posteriores

Para publicar cambios en el futuro:

```bash
npm run deploy
```

Eso es todo! Firebase automáticamente:
- Compila la nueva versión
- Sube los archivos
- Invalida el cache
- Actualiza el sitio en segundos

---

## 🌐 Dominio personalizado (Opcional)

Si querés usar tu propio dominio (ej: www.dcmabogados.com.ar):

1. Ve a Firebase Console → Hosting
2. Click en "Agregar dominio personalizado"
3. Ingresa tu dominio
4. Seguí las instrucciones para configurar los registros DNS
5. Firebase te dará registros A o CNAME para configurar en tu proveedor de dominio
6. Espera a que se verifique (puede tomar hasta 24hs)

---

## 📊 Monitoreo

En Firebase Console podés ver:
- **Analytics**: Visitantes, páginas vistas, etc.
- **Hosting**: Estado de los deploys, historial de versiones
- **Performance**: Velocidad de carga del sitio

---

## 🆘 Problemas comunes

### Error: "Error: Not authorized"
**Solución**: Ejecutá `npm run firebase:login` nuevamente

### Error: "Project not found"
**Solución**: Verificá que el ID del proyecto en `.firebaserc` sea correcto

### Error: "Build failed"
**Solución**: Ejecutá `npm run build` primero para ver el error específico

---

## 📝 Comandos útiles

```bash
# Ver qué proyectos tenés configurados
npx firebase projects:list

# Ver el estado del proyecto actual
npx firebase use

# Ver la lista de sitios
npx firebase hosting:sites:list

# Cancelar un deploy en progreso
npx firebase hosting:disable

# Ver versiones anteriores
npx firebase hosting:clone
```

---

## 💡 Consejos

1. **Antes de deployar**, verificá siempre con `npm run dev` que todo funcione localmente
2. **Provisualiza el build** con `npm run preview` antes de hacer deploy
3. Firebase mantiene un **historial de versiones**, podés volver atrás si algo sale mal
4. Los deploys son **instantáneos** - tus cambios se ven en segundos
5. Firebase Hosting incluye **SSL gratis** (HTTPS)

---

¿Necesitás ayuda? Contactá al desarrollador o consultá la [documentación oficial de Firebase](https://firebase.google.com/docs/hosting).
