export const SortByProperty = (links, sortOptions) => {
    return [...links].sort((a, b) => {
        return sortOptions.reverseSort === true ? parseFloat(a.point) - parseFloat(b.point) : parseFloat(b.point) - parseFloat(a.point);
    });
}