# 📅 **MiAgenda IA** 🧠⚡

*Gestor universitario de tareas con priorización inteligente y pila **FastAPI + React**.*

🎯 **Organiza tus pendientes y deja que la IA calcule prioridad y etiquetas automáticamente.**

---

## 📌 Descripción

**MiAgenda IA** es una aplicación web que ayuda a estudiantes y profesionales a registrar, clasificar y filtrar sus tareas.
Un micro‑servicio de IA extrae **tags** (estudio, laboral, entretenimiento) y asigna la **prioridad** (alta, normal, baja) analizando palabras clave y sentimiento mediante la API de Hugging Face .
La información se guarda en PostgreSQL y se muestra en un frontend React responsive con filtros por prioridad y CRUD completo de tareas .

---

## 🎯 Objetivos del proyecto

✅ Facilitar la gestión diaria de tareas académicas o laborales.
✅ Clasificar cada tarea con IA en el momento de crearla o editarla.
✅ Permitir filtrado instantáneo por prioridad.
✅ Mantener un diseño simple y adaptado a móvil/desktop.
✅ Garantizar calidad de código con **GitHub Actions** CI .

---

## 🛠️ Tecnologías utilizadas

### ⚙️ Backend

| Herramienta                                                                                 | Descripción                        |
| ------------------------------------------------------------------------------------------- | ---------------------------------- |
| ![FastAPI](https://img.shields.io/badge/FastAPI-Framework-teal?logo=fastapi)                | API REST y validación con Pydantic |
| ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red?logo=python)                  | Mapeo a PostgreSQL                 |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)        | Almacenamiento persistente         |
| ![Hugging Face](https://img.shields.io/badge/HuggingFace-Sentiment-yellow?logo=huggingface) | Análisis de sentimiento            |
| ![Uvicorn](https://img.shields.io/badge/Uvicorn-ASGI-blue?logo=python)                      | Server ASGI                        |

### 🎨 Frontend

| Herramienta                                                                               | Descripción         |
| ----------------------------------------------------------------------------------------- | ------------------- |
| ![React](https://img.shields.io/badge/React-JSX-blue?logo=react)                          | Interfaz SPA        |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap‑5-CSS-purple?logo=bootstrap)          | Estilos responsivos |
| ![Axios](https://img.shields.io/badge/Axios-HTTP-orange?logo=axios)                       | Consumo de API      |
| ![React Router](https://img.shields.io/badge/ReactRouter-Navigation-red?logo=reactrouter) | Navegación cliente  |

---

## 📂 Estructura del repositorio

```
agendiA/
├── backend/
│   ├── main.py            # Enrutado FastAPI :contentReference[oaicite:3]{index=3}
│   ├── ia.py              # Lógica de prioridad y tags :contentReference[oaicite:4]{index=4}
│   ├── database.py        # Conexión PostgreSQL :contentReference[oaicite:5]{index=5}
│   ├── models.py          # Modelo ORM Task :contentReference[oaicite:6]{index=6}
│   └── requirements.txt   # Dependencias backend
├── frontend/
│   ├── src/
│   │   ├── components/    # TaskForm, TaskList, PriorityFilter :contentReference[oaicite:7]{index=7}
│   │   ├── services/api.js# Cliente Axios con timeout :contentReference[oaicite:8]{index=8}
│   │   └── styles/        # Estilos CSS :contentReference[oaicite:9]{index=9}
│   └── package.json       # Dependencias React :contentReference[oaicite:10]{index=10}
└── .github/workflows/
    └── ci.yml             # Lint + tests en cada push :contentReference[oaicite:11]{index=11}
```

---

## 🚀 Instalación y ejecución

### 📋 Requisitos previos

* **Python 3.10+**
* **Node 18+**
* **PostgreSQL 13+**
* Variables de entorno:

  * `DATABASE_URL=postgresql://usuario:pass@localhost:5432/miagenda`
  * `HF_TOKEN=<token_huggingface>` (sentiment API)

### ⚙️ Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

> Al primer arranque se crean las tablas automáticamente mediante SQLAlchemy.

### 🌐 Frontend

```bash
cd frontend
npm install
npm start        # http://localhost:3000
```

### 🌍 Endpoints principales

* **GET /** – saludo de salud ✔️
* **POST /tasks** – crea tarea con prioridad automática
* **GET /tasks?priority=alta** – lista filtrada
* **PUT /tasks/{id}**, **DELETE /tasks/{id}**

---

## 📊 Funcionalidades destacadas

* ✨ Autoclase y prioridad con IA en tiempo real.
* 🔍 Filtro de tareas por prioridad desde el UI.
* 🖥️ CRUD completo y mensajes de error gestionados por Axios interceptors .
* 🔄 CORS habilitado para producción y desarrollo .
* 🧪 CI con lint (flake8 + black) y pruebas Pytest en cada push .

---

## 🧪 Ejemplo rápido

```bash
curl -X POST http://localhost:8000/tasks/ \
     -H "Content-Type: application/json" \
     -d '{"title":"Parcial de Álgebra","description":"Estudiar capítulos 4 y 5 antes del examen final"}'
```

Respuesta:

```json
{
  "id": 1,
  "title": "Parcial de Álgebra",
  "description": "Estudiar capítulos 4 y 5 antes del examen final",
  "priority": "alta",
  "tags": "estudio"
}
```

---

## 🧱 Dependencias clave

```txt
# backend/requirements.txt (extracto)
fastapi
uvicorn[standard]
sqlalchemy
psycopg2-binary
python-dotenv
requests           # llamadas a Hugging Face
```

```jsonc
// frontend/package.json (extracto)
"react": "^19",
"axios": "^1.9",
"bootstrap": "^5.3",
"react-router-dom": "^7.6"
```

---

## 🌟 Mejoras futuras

🚀 Sistema de autenticación (supabase / clerk).
🚀 Recordatorios por correo o push notifications.
🚀 Dashboard con gráficas de productividad.
🚀 Internacionalización (i18n) e idioma inglés / español.
🚀 Tests end‑to‑end con Playwright.

---

## 🤝 Contribuciones

1. Haz **fork** 🍴 del repositorio.
2. Crea tu rama `feature/<nombre>`.
3. Commits con mensajes claros y lint passing.
4. Abre un **Pull Request** detallando cambios.

---

## 🧑‍💻 **Autores**

📧 [daquezadal@uce.edu.ec](mailto:daquezadal@uce.edu.ec)
📧 [esherrera@uce.edu.ec](mailto:esherrera@uce.edu.ec)
📧 [jaquimba@uce.edu.ec](mailto:jaquimba@uce.edu.ec)

---

## 📃 Licencia

Distribuido bajo licencia **MIT** – revisa el archivo `LICENSE` para más detalles.

---

🔐 **MiAgenda IA — tu agenda diaria con un toque de inteligencia.**
