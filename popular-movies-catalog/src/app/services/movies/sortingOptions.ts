import { IFilteringOption, IGenre } from 'src/app/interfaces/movies';
import { MoviesService } from './movies.service';

export const MMMC_SORTING_OPTIONS = [
    {
        label: 'Popularity Descending',
        value: 'popularity.desc'
    },
    {
        label: 'Popularity Ascending',
        value: 'popularity.asc'
    }
]


//Generate years for searching year option.
export const generateYearSortingOptions = () => {
    const todayYear: number = new Date().getFullYear();
    const minYear: number = 1900;
    const filterByYearList: IFilteringOption[] = [];

    filterByYearList.push({
        label: 'All',
        value: 0
    })

    for (let i = todayYear; i >= minYear; i--) {
        filterByYearList.push({
            label: i.toString(),
            value: i
        })
    }

    return filterByYearList;
};