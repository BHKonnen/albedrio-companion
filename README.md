# Albedrío Companion v0.1.0

Extensión para Owlbear Rodeo: barcos, daños, artillería, combate, mejoras, bastiones y turnos.

## Requisitos
Node.js 20 o superior y una cuenta de Owlbear Rodeo.

## Desarrollo en Windows (PowerShell)
1. Descomprime el ZIP.
2. Abre PowerShell en la carpeta `albedrio-companion`.
3. Ejecuta `npm install` y después `npm run dev`.
4. Abre `http://localhost:5173/manifest.json` en el navegador y comprueba que muestra JSON.
5. En Owlbear Rodeo, abre una escena y entra en Profile → Extensions → Add extension.
6. Pega `http://localhost:5173/manifest.json` y abre Albedrío Companion.

Si Vite anuncia otro puerto, usa ese puerto. Si aparece `Failed to fetch`, comprueba que `npm run dev` sigue ejecutándose y que el manifest abre en el navegador. En algunas configuraciones Owlbear bloquea URLs locales; publica el build en un hosting HTTPS.

## Publicación
1. Ejecuta `npm run build`.
2. Publica **el contenido de `dist/`** en un hosting HTTPS estático (GitHub Pages, Netlify o Cloudflare Pages).
3. Añade en Owlbear `https://TU-DOMINIO/manifest.json`.

**GitHub Pages:** si publicas bajo `/nombre-repositorio/` en lugar de la raíz del dominio, establece `base: '/nombre-repositorio/'` en `vite.config.js`, vuelve a compilar y ajusta las rutas del `manifest.json` (`icon`, `popover`, `background_url`) para que incluyan ese prefijo. Para evitar complicaciones, se recomienda Netlify/Cloudflare Pages con raíz `/`.

## Datos y reglas
- La información se guarda en `OBR.scene.setMetadata` y se comparte entre participantes de **esa escena**.
- El apartado Datos permite exportar/importar JSON.
- No existe un motor de permisos seguro: los jugadores con acceso a la extensión pueden editar los datos compartidos. No guardar secretos del DM.
- La defensa naval es un valor provisional editable. El ataque usa d20 + bonificador contra esa defensa; 1 natural falla, 20 natural acierta. No se aplica daño crítico extra automáticamente.
- Alcance largo aplica desventaja; ventaja/desventaja simultáneas se neutralizan según la regla general de D&D.
- El daño estructural y el daño a criaturas son independientes. La salvación de criaturas se resuelve manualmente.
- Los daños graves se registran manualmente. El límite de daños no resuelve hundimiento automáticamente.
- Recargar y disparar son botones manuales; no se controla automáticamente la economía de acciones.
- Las mejoras no modifican automáticamente atributos; se registran y la ficha permite ajustar los valores correspondientes.
- Los ingresos de bastiones se resuelven manualmente.

## Alcance de la versión
Esta versión es una primera implementación para pruebas, no una integración verificada en una sala real de Owlbear Rodeo. No incluye sincronización entre escenas, iniciativa automática, permisos avanzados ni cálculo automático de efectos de mejoras.
