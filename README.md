# 🧪 QA Portfolio - Marithza Castaño  

Este repositorio reúne mis proyectos prácticos de **Testing Manual y Automatizado**, con el objetivo de demostrar mis habilidades y seguir aprendiendo en el área de **Calidad de Software**.  

Incluye ejemplos de pruebas en aplicaciones web, validación de APIs, reportes de bugs y uso de diferentes herramientas.  

---

## 📂 Contenido del repositorio  

1. **Pruebas automatizadas con Cypress**  
   - Casos de prueba automatizados en la página [SauceDemo](https://www.saucedemo.com/).  
   - Flujos cubiertos:  
     - Login válido e inválido.  
     - Agregar productos al carrito.  
     - Proceso de checkout.  
   - Reportes y screenshots incluidos.  

- **(./cypress/e2e)** → Automatización de login, carrito y checkout en SauceDemo.  

- **(./cypress/screenshots/saucedemo.cy.js)** → Screenshots del RESULTADO ESPERADO de cada prueba login, carrito y checkout en SauceDemo.  

- **(./cypress/reports/html/assets/reporte.html)** → Reporte HTML pruebas pasadas y fallidas con Mochawesome.  


2. **Pruebas de API con Postman**  
   - Colección de pruebas en la API pública de [Pokémon](https://pokeapi.co/).  
   - Validaciones realizadas:  
     - Respuesta con **status code 200**.  
     - Estructura del JSON (propiedades como `name` o `id`).  
     - Caso de error con endpoint inválido (404).  
   - Reporte en HTML incluido.  

- **(./src/postman-collections)** → colección en Postman.

- **(./src/postman-collections/reports)** → Reporte HTML con newman y newman-reporter-html



3. **Bug Report con Test & Feedback (EXTENSION CHROME)**  
   - Ejemplo de reporte de bug documentado con pasos de reproducción automáticos.  
   - Caso: **login inválido en SauceDemo**. 

- **(./bug-reports/)** → Reporte de bug documentado con pasos de reproducción.



4. **Test Cases**  
   - Casos de prueba diseñados para aplicaciones web y APIs.  

- **(./test-cases/)** → Casos de prueba de la aplicaciones web y APIs.  



5. **Integración Continua (CI) con GitHub Actions**  
   - Configuración de un flujo de trabajo que ejecuta las pruebas de Cypress automáticamente en cada **push** o **pull request**.  
   - Beneficios:  
     - Detectar errores antes de integrarlos al proyecto.  
     - Asegurar que el código siempre se valide con pruebas automatizadas.  
   - Archivo de configuración:  

- **(./.github/workflows/cypress.yml)** → Flujo de trabajo para ejecutar pruebas E2E con Cypress en GitHub Actions.  

---

## 🛠️ Herramientas utilizadas  

- **Cypress** → Automatización de pruebas en aplicaciones web.  
- **Postman** → Pruebas de API y generación de reportes en HTML.  
- **BrowserStack** → Ejecución de pruebas en múltiples navegadores.  
- **TestCaseStudio** → Generación de pasos de reproducción de bugs.  
- **Test & Feedback** → Creación de bugs y reportes en HTML.  
- **GitHub Actions** → Integración continua para ejecutar pruebas automáticamente.  

---

## 🚀 Objetivo  

Seguir fortaleciendo mis conocimientos en **pruebas manuales y automatizadas**, aplicando buenas prácticas de QA y compartiendo mis proyectos para aportar a la comunidad.  

