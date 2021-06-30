// calculate vehicle age
export const calculateCarAge = (manufactureYear: number) => {
    return new Date().getFullYear() - manufactureYear;
}