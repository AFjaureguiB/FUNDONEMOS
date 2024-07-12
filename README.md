# Propósito del Software

El software debe permitir el seguimiento (trazabilidad) de unos ítems específicos. Dichos ítems cuentan con una característica, un código único que provee el usuario, este código no se puede repetir y es ingresado manualmente. El software debe contar con diferentes páginas, una por cada proceso, a las cuales solo va a poder acceder el usuario que se loguee y que cuente con el rol específico para esa página o tarea (`roleAdmin`, `roleUser`). Cada rol cuenta con un admin y un user. El admin del proceso o rol debe poder, en dicha página, buscar el ID del ítem y cambiar sus valores a gusto, mientras que el `roleUser` debe únicamente ingresar datos, sin tener disponible otra opción. 

Los 5 procesos principales que componen el sitio son:

1. **Creación de donantes**: admin del proceso y 10 usuarios de ingreso de información.
2. **Control de calidad de materia prima**: admin del proceso y 1 usuario de ingreso de información.
3. **Producción y creación de referencias de injertos óseos**: admin del proceso y 2 usuarios de ingreso de información.
4. **Control de calidad de producto terminado**: admin del proceso y 1 usuario de ingreso de información.
5. **Logística de distribución y trazabilidad de implantación**: admin del proceso y 2 usuarios de ingreso de información.

A cada pieza única se le relacionan varias tablas:

## Proceso Creación de Donantes
- A cada código único (por ejemplo, 123456) primero se le deben relacionar los datos del donante de dicho ítem (especificados en la tabla donantes). A este punto, el “ítem” dentro del software ya está creado y tiene su información del donante.

## Proceso Control de Calidad de Materia Prima

¿Qué pasa luego? El ítem se somete a unas pruebas infecciosas (tabla pruebas infecciosas). Si las pruebas salen negativas, el ítem es apto para seguir al siguiente proceso; si no, el ítem debe pasar a una tabla que diga rechazados. En esta parte, el `roleUser` debe poder indicar cuál de las pruebas de la tabla salió positiva o negativa.

## Proceso de Creación de Referencias

Si el ítem es apto, luego pasa por unos procesos de transformación donde se crean nuevos subítems derivados del ítem general. Usualmente se le asigna una letra, por ejemplo, 123456-A, 123456-B, etc. En esta parte, el `roleUser` debe poder indicar del ítem principal (123456) cuántas y cuáles referencias salieron como subítems.

## Proceso Control de Calidad de Producto Final

De todos esos subítems creados a partir de cada ítem, se deben poder agrupar todos por lotes. De allí, de cada lote se va a sacar un subítem al azar y se le van a hacer unas pruebas de calidad encontradas en la tabla de (control de calidad). El `roleUser` debe poder decir que el lote nro XXXX, aprobó o no aprobó las pruebas de control.

## Proceso de despacho y logística.

Por último, después de todo el proceso, deben indicarle al software y agrupar los subproductos pertenecientes a la referencia (123456) y hacer un inventario. Entonces sería algo como: del subítem 123456-A existen 4 unidades. Eso se debe poder guardar en otra tabla, y tener un nav bar (quizá) donde indique:

1. **Inventario** 
2. **Despacho**

En la parte de despacho van a ingresar los datos de (Empresa destino y Receptor Final).

![image](https://github.com/user-attachments/assets/00ee7649-5ef4-40a2-83fa-3e154913153f)




