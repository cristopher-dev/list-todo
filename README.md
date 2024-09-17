# Estructura del proyecto

src  
├── auth  
│ ├── dto/  
│ ├── entity/  
│ ├── guard/  
│ ├── service/  
│ ├── strategy/  
│ ├── auth.controller.ts  
│ └── auth.module.ts  
├── tasks  
│ ├── dto/  
│ ├── entity/  
│ ├── interface/  
│ ├── service/  
│ ├── http-exception.filter.ts  
│ ├── tasks.controller.spec.ts  
│ ├── tasks.controller.ts  
│ ├── tasks.module.ts  
├── app.controller.spec.ts  
├── app.controller.ts  
├── app.module.ts  
└── app.service.ts

Este código crea una estructura de árbol que muestra las carpetas y archivos tal como los viste en la imagen.

# Documentación del archivo `package.json`

Este archivo `package.json` define la configuración de un proyecto de API utilizando NestJS. A continuación se explica cada sección de manera detallada.

## Información General

- **name**:  `todo-api`.
- **version**:  `0.0.1`.
- **description**: todo.
- **author**: cristopher martinez.
- **private**: false.
- **license**: La licencia de uso. En este caso, `MIT`.

## Scripts

Los scripts definen comandos que se pueden ejecutar desde la línea de comandos mediante `npm run <script>`:

- **build**: Construye el proyecto con el comando `nest build`.
- **format**: Formatea los archivos `.ts` en las carpetas `src` y `test` usando Prettier.
- **start**: Inicia el proyecto con `nest start`.
- **start:dev**: Inicia el proyecto en modo de desarrollo con `watch`, que recarga automáticamente la aplicación cuando hay cambios.
- **start:debug**: Inicia el proyecto en modo debug y con `watch`.
- **start:prod**: Inicia el proyecto en modo de producción ejecutando el archivo `main` desde la carpeta `dist`.
- **lint**: Ejecuta ESLint para comprobar el estilo de los archivos `.ts` en las carpetas `src`, `apps`, `libs` y `test` y corrige errores automáticamente.
- **test**: Ejecuta las pruebas con Jest.
- **test:watch**: Ejecuta Jest en modo watch para correr pruebas continuamente mientras se desarrollan cambios.
- **test:cov**: Ejecuta pruebas con cobertura de código con Jest.
- **test:debug**: Inicia Jest en modo de depuración, usando `ts-node` y `tsconfig-paths`.
- **test:e2e**: Ejecuta pruebas end-to-end (e2e) usando la configuración especificada en `jest-e2e.json`.

## Dependencias

El proyecto tiene varias dependencias que se instalan cuando ejecutas `npm install`:

- **@nestjs/common, @nestjs/core, @nestjs/jwt, @nestjs/passport, @nestjs/platform-express, @nestjs/typeorm**: Estas son las principales dependencias de NestJS para la estructura del servidor, autenticación y conexión a base de datos con TypeORM.
- **bcryptjs**: Se usa para encriptar contraseñas.
- **class-transformer, class-validator**: Utilizadas para la validación y transformación de datos en DTOs.
- **express-rate-limit**: Middleware para limitar la tasa de solicitudes al servidor.
- **helmet**: Middleware para mejorar la seguridad del servidor añadiendo varios encabezados HTTP.
- **jsonwebtoken**: Para generar y verificar tokens JWT.
- **passport, passport-jwt**: Para la autenticación basada en JWT utilizando el middleware Passport.
- **reflect-metadata**: Soporte para metadatos, requerido por TypeScript y algunas librerías.
- **rxjs**: Biblioteca para programación reactiva utilizada en NestJS.
- **sqlite3**: Base de datos SQLite utilizada en desarrollo o producción.

## Dependencias de Desarrollo

Las dependencias de desarrollo son utilizadas para probar, construir y mantener la calidad del código:

- **@nestjs/cli, @nestjs/schematics, @nestjs/testing**: Herramientas de CLI, esquemas y pruebas de NestJS.
- **@types/express, @types/helmet, @types/jest, @types/node, @types/supertest**: Paquetes de tipos de TypeScript para las bibliotecas correspondientes.
- **@typescript-eslint/eslint-plugin, @typescript-eslint/parser**: Para integrar ESLint con TypeScript.
- **eslint, eslint-config-prettier, eslint-plugin-prettier**: Herramientas para linting y formateo de código.
- **jest, ts-jest**: Utilizados para pruebas con Jest y soporte para TypeScript en Jest.
- **prettier**: Herramienta para formatear el código de acuerdo con las reglas de estilo.
- **source-map-support**: Proporciona mejores errores con soporte para mapas de código fuente en Node.js.
- **supertest**: Utilizada para pruebas HTTP.
- **ts-loader, ts-node, tsconfig-paths**: Herramientas para compilar y ejecutar código TypeScript.
- **typescript**: Compilador de TypeScript.

## Configuración de Jest

Jest es la herramienta utilizada para las pruebas en el proyecto. La configuración incluye:

- **moduleFileExtensions**: Extensiones de archivo que Jest puede manejar (JavaScript, JSON, TypeScript).
- **rootDir**: Define el directorio raíz como `src`.
- **testRegex**: Patrón para encontrar archivos de prueba (`.spec.ts`).
- **transform**: Usa `ts-jest` para transformar archivos `.ts` o `.js` antes de ejecutarlos.
- **collectCoverageFrom**: Archivos de los cuales Jest recopilará información de cobertura.
- **coverageDirectory**: El directorio donde se guardará la cobertura de pruebas, en `../coverage`.
- **testEnvironment**: Define el entorno de prueba como Node.js.

## Resumen

Este archivo define las dependencias, scripts y configuraciones básicas para ejecutar un proyecto NestJS con TypeScript, pruebas automatizadas con Jest, y buenas prácticas de desarrollo utilizando ESLint y Prettier.

# Documentación del `AppModule`

Este archivo es el módulo raíz de la aplicación NestJS. El propósito principal del módulo es importar otros módulos, registrar proveedores y controlar la configuración principal de la aplicación. A continuación se detallan sus secciones.

## Descripción General

El `AppModule` utiliza varios módulos y configuraciones importantes de NestJS, como JWT para autenticación y TypeORM para la conexión con la base de datos SQLite.

## Importaciones

El módulo importa las siguientes bibliotecas y módulos de NestJS:

- **`@nestjs/common`**: Contiene las clases y decoradores esenciales de NestJS, como `Module`, que se utiliza para definir el módulo.
- **`@nestjs/typeorm`**: Se usa para integrar TypeORM, un ORM (Object Relational Mapper) que facilita la interacción con bases de datos.
- **`@nestjs/jwt`**: Es el módulo utilizado para generar y manejar tokens JWT (JSON Web Token) en la autenticación.

Además, se importan los módulos internos de la aplicación, como:

- **`TasksModule`**: Módulo que gestiona las tareas.
- **`AuthModule`**: Módulo responsable de la autenticación y la gestión de usuarios.

## Decorador `@Module`

El decorador `@Module` declara las importaciones, controladores y proveedores para el módulo principal de la aplicación.

### Sección `imports`

La sección `imports` define los módulos que deben ser incluidos para que el `AppModule` funcione correctamente:

- **`JwtModule.register`**: Configura el módulo de JWT para la autenticación. Define la clave secreta para firmar los tokens (`JWT_SECRET`) y una duración de expiración de los tokens de 1 hora (`expiresIn: '1h'`). Si la variable de entorno `JWT_SECRET` no está definida, usa `'1234567890'` como valor predeterminado.
- **`TypeOrmModule.forRoot`**: Configura TypeORM para usar una base de datos SQLite. Las propiedades principales son:

  - **`type: 'sqlite'`**: Define el tipo de base de datos como SQLite.
  - **`database: 'todo.sqlite'`**: El nombre del archivo de la base de datos es `todo.sqlite`.
  - **`entities: [Task, User]`**: Define las entidades que serán gestionadas en la base de datos. Estas son las entidades `Task` y `User`.
  - **`synchronize: true`**: Permite a TypeORM sincronizar las entidades automáticamente con la base de datos cada vez que se ejecuta la aplicación. Esto es útil durante el desarrollo, pero no se recomienda para entornos de producción.

- **`TasksModule`**: Módulo que gestiona la lógica y las operaciones relacionadas con las tareas.

- **`AuthModule`**: Módulo que maneja la autenticación de usuarios.

### Sección `controllers`

La sección `controllers` especifica los controladores que manejarán las solicitudes HTTP entrantes. En este caso:

- **`AppController`**: Controlador principal de la aplicación.

### Sección `providers`

La sección `providers` define los servicios que estarán disponibles para su inyección en la aplicación. Aquí se declara:

- **`AppService`**: Servicio principal que puede ser inyectado en otros componentes de la aplicación.

## Entidades

Este módulo también registra dos entidades para ser utilizadas por TypeORM:

- **`Task`**: Entidad que representa una tarea dentro de la aplicación.
- **`User`**: Entidad que representa a un usuario del sistema.

## Resumen

El `AppModule` es la base de la aplicación. Importa y configura otros módulos como JWT para la autenticación y TypeORM para la gestión de la base de datos SQLite. También define los controladores y servicios esenciales de la aplicación.

# Documentación del `AuthModule`

Este archivo define el módulo de autenticación (`AuthModule`) en una aplicación NestJS. Este módulo gestiona la autenticación de usuarios, incluyendo la generación de tokens JWT y la gestión de los usuarios mediante TypeORM.

## Descripción General

El `AuthModule` utiliza varios módulos y servicios de NestJS para autenticar usuarios y proteger rutas mediante la estrategia JWT (JSON Web Token). Este módulo importa la entidad `User`, configura la firma de JWT y proporciona controladores y servicios relacionados con la autenticación y la gestión de usuarios.

## Importaciones

El módulo importa las siguientes bibliotecas y módulos:

- **`@nestjs/common`**: Incluye clases y decoradores necesarios para crear el módulo, controladores y proveedores.
- **`@nestjs/jwt`**: Se utiliza para generar y validar los tokens JWT, que son clave para la autenticación.
- **`@nestjs/typeorm`**: Este módulo facilita la integración con TypeORM para interactuar con la base de datos.
- **`./entity/user.entity`**: Define la entidad `User`, que representa a los usuarios en la base de datos.
- **`./strategy/jwt.strategy`**: Define la estrategia de autenticación con JWT.

## Decorador `@Module`

El decorador `@Module` declara las importaciones, controladores y proveedores del módulo de autenticación.

### Sección `imports`

Esta sección define los módulos que son necesarios para que el `AuthModule` funcione correctamente:

- **`JwtModule.register`**: Configura el módulo JWT con las siguientes opciones:
  - **`secret: '1234567890'`**: Define la clave secreta utilizada para firmar los tokens JWT. Esta clave debe ser cambiada a una más segura en entornos de producción.
  - **`signOptions: { expiresIn: '1h' }`**: Establece la duración del token JWT a 1 hora.
- **`TypeOrmModule.forFeature([User])`**: Importa la entidad `User` para que sea accesible en este módulo. Esto permite a los servicios como `UsersService` interactuar con la base de datos para operaciones relacionadas con usuarios.

### Sección `controllers`

- **`AuthController`**: El controlador maneja las solicitudes HTTP relacionadas con la autenticación, como el inicio de sesión y la obtención de tokens JWT.

### Sección `providers`

Los proveedores son los servicios que el módulo pone a disposición para la lógica de autenticación y la interacción con la base de datos:

- **`AuthService`**: Servicio que contiene la lógica central de autenticación, como la validación de credenciales de usuario y la generación de tokens JWT.
- **`UsersService`**: Servicio que maneja las operaciones relacionadas con la gestión de usuarios, como buscar un usuario por su nombre de usuario o ID.
- **`JwtStrategy`**: Implementa la estrategia de autenticación basada en JWT. Se utiliza para validar tokens en solicitudes protegidas, garantizando que solo usuarios autenticados puedan acceder a ciertos recursos.

## Entidades

- **`User`**: Esta es la única entidad registrada en este módulo. Representa a los usuarios de la aplicación y se utiliza para realizar operaciones de autenticación, como el almacenamiento de credenciales de usuario en la base de datos.

## Resumen

El `AuthModule` es responsable de la autenticación en la aplicación. Proporciona endpoints para gestionar el inicio de sesión y la autenticación mediante JWT. Utiliza `JwtModule` para la generación de tokens y `TypeOrmModule` para la interacción con la base de datos SQLite, específicamente con la entidad `User`.

### Notas de Seguridad

- **Clave secreta**: Es importante cambiar la clave secreta utilizada para firmar los tokens (`'1234567890'`) por una más segura en un entorno de producción. Lo ideal es utilizar una variable de entorno para este valor.

# Documentación del `TasksModule`

Este archivo define el módulo de tareas (`TasksModule`) en una aplicación NestJS. Este módulo gestiona las operaciones relacionadas con las tareas, incluyendo el manejo de excepciones personalizadas mediante un filtro global.

## Descripción General

El `TasksModule` es responsable de toda la lógica de negocio relacionada con las tareas dentro de la aplicación. Utiliza TypeORM para interactuar con la entidad `Task`, que representa una tarea en la base de datos. Además, se incluye un filtro de excepciones personalizado que maneja las respuestas de errores a nivel de aplicación.

## Importaciones

El módulo importa las siguientes bibliotecas y módulos:

- **`@nestjs/common`**: Proporciona las clases y decoradores necesarios para crear módulos, controladores y proveedores.
- **`@nestjs/typeorm`**: Se utiliza para integrar TypeORM y permitir la interacción con la base de datos a través de la entidad `Task`.
- **`./entity/task.entity`**: Define la entidad `Task`, que representa una tarea en la base de datos.
- **`./http-exception.filter`**: Filtro personalizado que maneja las excepciones lanzadas por la aplicación.
- **`@nestjs/core`**: Utilizado para el registro de proveedores globales, en este caso, el filtro de excepciones.

## Decorador `@Module`

El decorador `@Module` organiza las diferentes secciones de este módulo, incluyendo las importaciones, los controladores y los proveedores.

### Sección `imports`

La sección `imports` declara los módulos que se requieren para que el `TasksModule` funcione correctamente:

- **`TypeOrmModule.forFeature([Task])`**: Importa la entidad `Task` para que el módulo pueda interactuar con la base de datos. Esto permite que el servicio de tareas realice operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en las tareas.

### Sección `controllers`

- **`TasksController`**: Este controlador maneja las solicitudes HTTP relacionadas con las tareas, tales como crear nuevas tareas, obtener una lista de tareas, actualizar tareas y eliminar tareas.

### Sección `providers`

Los proveedores son los servicios que estarán disponibles dentro del módulo para ejecutar la lógica de negocio y manejar las excepciones:

- **`TasksService`**: Servicio que contiene la lógica principal para gestionar las tareas, como la creación, recuperación, actualización y eliminación de tareas en la base de datos.
- **`APP_FILTER`**: Este es un proveedor global que utiliza el decorador `APP_FILTER` para registrar un filtro personalizado de excepciones:
  - **`HttpExceptionFilter`**: Un filtro de excepciones personalizado que se utiliza para manejar de manera centralizada las excepciones lanzadas por la aplicación. Este filtro captura los errores y formatea las respuestas de manera consistente.

## Entidades

- **`Task`**: Entidad que representa las tareas dentro de la base de datos. Define los campos y atributos que tendrá cada tarea en la base de datos y permite realizar operaciones sobre las mismas usando TypeORM.

## Excepciones

El `TasksModule` implementa un filtro global para manejar las excepciones:

- **`HttpExceptionFilter`**: Este filtro captura todas las excepciones que ocurren dentro del módulo (o incluso en la aplicación si está registrado globalmente) y formatea la respuesta de error. Esto asegura que las excepciones sean manejadas de manera consistente en toda la aplicación.

## Resumen

El `TasksModule` es responsable de todas las operaciones relacionadas con las tareas dentro de la aplicación. Se integra con TypeORM para gestionar la persistencia de datos y utiliza un filtro de excepciones personalizado para garantizar que los errores sean manejados y reportados de manera uniforme.

### Notas

- **Filtros de Excepciones**: El filtro de excepciones `HttpExceptionFilter` es declarado como un proveedor global en este módulo. Esto significa que manejará todas las excepciones en este módulo, pero puede configurarse para manejar excepciones a nivel global de la aplicación si se registra en el módulo raíz.
- **Persistencia de Datos**: La entidad `Task` se sincroniza con la base de datos usando TypeORM. Es importante asegurarse de que el esquema de la entidad esté correctamente definido para evitar problemas en la base de datos.

# Documentación del `TasksController`

El `TasksController` es el responsable de manejar las solicitudes HTTP relacionadas con las tareas en la aplicación. Implementa rutas para crear, obtener, actualizar y eliminar tareas, utilizando servicios y DTOs específicos para manipular los datos.

## Descripción General

Este controlador está asociado a la ruta base `/tasks` y expone diferentes endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas. Además, emplea validaciones, autenticación mediante JWT y filtros personalizados para manejar las excepciones.

## Decoradores

El `TasksController` usa varios decoradores clave para definir el comportamiento de los endpoints y la lógica de manejo de errores y validaciones:

### `@Controller('tasks')`

- Define que todas las rutas dentro de este controlador comenzarán con `/tasks`.

### `@UseFilters(HttpExceptionFilter)`

- Aplica el filtro de excepciones `HttpExceptionFilter` de manera global a todos los métodos dentro del controlador, asegurando un manejo uniforme de errores.

## Métodos HTTP

### `@Post()`

Este método maneja las solicitudes `POST` a `/tasks` y es responsable de la creación de nuevas tareas.

- **Autenticación**: Protegido por el guardián de autenticación `AuthGuard('jwt')`, lo que significa que el usuario debe estar autenticado mediante JWT.
- **Validación**: Utiliza el `ValidationPipe` para validar el DTO de la tarea (`CreateTaskDto`) antes de intentar crear la tarea.
- **Error Handling**: Si ocurre un error al crear la tarea, lanza una excepción `BadRequestException` con el mensaje "Failed to create task".

#### Ejemplo de solicitud:

```bash
POST /tasks
{
  "title": "Nueva Tarea",
  "description": "Descripción de la tarea",
  "status": "pending"
}
```
