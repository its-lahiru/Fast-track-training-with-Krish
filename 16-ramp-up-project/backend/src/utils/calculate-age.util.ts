// calculate vehicle age
export const calculateVehicleAge = (manufactureYear: number) => {
    return new Date().getFullYear() - manufactureYear;
}