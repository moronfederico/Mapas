// export class Marcador {
//     constructor (public lat: number, public lng:number ) {}
// }



export class Marcador {

    public lat:number;
    public lng:number;

    public titulo: string = "Sin Titulo";
    public desc= "Sin Descripcion";

    constructor ( lat: number,  lng:number ) {
        this.lat= lat;
        this.lng = lng;
    }

}