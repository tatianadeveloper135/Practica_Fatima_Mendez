import { useState } from 'react';

export default function Contador() {
const [contador, setContador] = useState(0);

function incrementar() {
setContador(contador + 1);
}

return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>Mi Primer Contador con useState</h2>
<p style={{ fontSize: '24px', fontWeight: 'bold' }}>
Clicks actualizados: {contador}
</p>
<button
onClick={incrementar}
style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
>
¡Incrementar!
</button>
</div>
);
}
