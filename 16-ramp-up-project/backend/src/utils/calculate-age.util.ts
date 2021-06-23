// calculate vehicle age
export const calculateVehicleAge = (manufactureYear: string) => {
    const fullDateArray = manufactureYear.split('/');
    const year = fullDateArray[2];
    return new Date().getFullYear() - parseInt(year);
}