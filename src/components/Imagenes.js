import coactivo from '../asset/img/coactivo.jpg';
import equipos from '../asset/img/equipos.jpg';
import transformacion from '../asset/img/transformacion.jpg';
import neurociencia from '../asset/img/neurociencia.jpg';
import whitmore from '../asset/img/whitmore.jpg';
import bicondoa from '../asset/img/bicondoa.jpg';
import evans from '../asset/img/evans.jpg';
import perel from '../asset/img/perel.jpg';

const imagenes = require.context ('../asset/img/', true);

export default {
    "libro1": coactivo,
    "libro2": equipos,
    "libro3": transformacion,
    "libro4": neurociencia,
    "libro5": whitmore,
    "libro6": bicondoa,
    "libro7": evans,
    "libro8": perel

}