export const generatePages = (totalPagesNumber: number) => {
    const totalPages: number[] = [];
    for (let i = 1; i <= totalPagesNumber; i++) {
        totalPages.push(i);
    }

    return totalPages;
}

export const pageValidations = (totalPagesNumber: number, pageNumber: number) => {
    if(pageNumber > totalPagesNumber || pageNumber < 1) {
        return false;
    }

    return true;
}