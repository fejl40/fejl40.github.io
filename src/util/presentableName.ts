export const presentableName = (input:string) => {
    return  (input[0].toUpperCase()+input.substring(1).toLowerCase()).trim();
}