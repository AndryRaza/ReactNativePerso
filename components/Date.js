export const date = () =>{
    let date = new Date();
    let jourMois = date.getDate();
    let mois = date.getMonth()+1;
    let annee = date.getFullYear();



    return mois > 10 ? `${jourMois}/${mois}/${annee}` : `${jourMois}/0${mois}/${annee}`
}