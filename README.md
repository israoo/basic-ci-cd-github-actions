
# CI/CD con GitHub Actions

Este proyecto es una demostración sencilla de **CI/CD** utilizando **GitHub Actions**. El código fuente se compila con **Webpack**, ejecuta pruebas automatizadas con **Jest**, y despliega un HTML generado automáticamente en **GitHub Pages**.

---

## Estructura del proyecto

```plaintext
.
├── .github
│   └── workflows
│       └── ci_cd.yml      # Pipeline de GitHub Actions
├── dist
│   └── index.html         # HTML generado (salida)
├── src
│   └── index.js           # Lógica de fecha
├── tests
│   └── index.test.js      # Prueba unitaria
├── package.json           # Configuración de dependencias y scripts
└── webpack.config.js      # Configuración de Webpack
```

---

## Requisitos previos

1. Tener **Node.js** (versión 18 o superior) instalado.
2. Un repositorio de **GitHub**.
3. GitHub Pages activado en **Settings > Pages**.

---

## Instalación local

1. Clona este repositorio:

   ```bash
   git clone https://github.com/israoo/basic-ci-cd-github-actions.git
   cd basic-ci-cd-github-actions
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta las pruebas:

   ```bash
   npm test
   ```

4. Compila el proyecto localmente:

   ```bash
   npm run build
   ```

5. Abre el archivo `dist/index.html` en tu navegador.

---

## Pipeline de CI/CD con GitHub Actions

Este pipeline realiza los siguientes pasos automáticamente al hacer **push** a la rama `master`:

1. **Checkout** del repositorio.
2. Instalación de dependencias.
3. Ejecución de pruebas unitarias con Jest.
4. Compilación del proyecto con Webpack.
5. Despliegue del archivo HTML a **GitHub Pages**.

---

## Scripts disponibles

- **`npm test`**: Ejecuta las pruebas unitarias.
- **`npm run build`**: Compila el proyecto y genera el archivo HTML en `dist/`.

---

## Configuración de GitHub Pages

1. Ve a **Settings > Pages** en tu repositorio.
2. Selecciona "GitHub Actions" como fuente de despliegue.

---

## Resultado

Una vez ejecutado el pipeline, el HTML desplegado mostrará un mensaje con la fecha dinámica de compilación, como:

```text
¡Despliegue exitoso con GitHub Actions el 2024-12-17 14:35:12!
```

---

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución.
- **Webpack**: Bundler para generar el HTML y el bundle.
- **Jest**: Framework de pruebas unitarias.
- **GitHub Actions**: Automatización del CI/CD.
