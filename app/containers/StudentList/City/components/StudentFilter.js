import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

function StudentFilter(props) {
  const classes = useStyles();
  const { cityList, filter, onChange, onSearchChange } = props;
  console.log('_filterStudent rerender');
  const handleSearchChange = e => {
    const newFilter = {
      ...filter,
      name_like: e.target.value,
      _page: 1,
    };
    onSearchChange(newFilter);
  };

  const handleCityChange = e => {
    const newFilter = {
      ...filter,
      _page: 1,
      city: e.target.value || '',
    };
    onChange(newFilter);
  };
  const handleSortChange = e => {
    const { value } = e.target;
    const [_sort, _order] = value.split('.');
    const newFilter = {
      ...filter,
      _sort: _sort || undefined,
      _order: _order || undefined,
    };
    onChange(newFilter);
  };
  const handleClearFilter = e => {
    const newFilter = {
      ...filter,
      _page: 1,
      _sort: undefined,
      _order: undefined,
      name_like: undefined,
      city: undefined,
    };
    onChange(newFilter);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {/* Filter by search key word */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search by name</InputLabel>
            <OutlinedInput
              label="searchByName"
              id="searchByName"
              onChange={handleSearchChange}
              endAdornment={<Search />}
              value={filter.name_like || ''}
            />
          </FormControl>
        </Grid>
        {/* Filter by city */}
        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="filterByCity">Filter by city</InputLabel>
            <Select
              labelId="filterByCity"
              id="filterByCity-select"
              label="Filter by city"
              onChange={handleCityChange}
              value={filter.city || ''}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {cityList.map(city => (
                <MenuItem key={city.code} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Sort */}
        <Grid item xs={12} md={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="sortBy">Sort by</InputLabel>
            <Select
              labelId="sortBy"
              id="sort-select"
              label="Sort by"
              onChange={handleSortChange}
              value={filter.city ? `${filter._sort}.${filter._order}` : ''}
            >
              <MenuItem value="">
                <em>No sort</em>
              </MenuItem>
              <MenuItem value="name.asc">Name ASC </MenuItem>
              <MenuItem value="name.desc">Name DESC </MenuItem>
              <MenuItem value="mark.asc">Mask ASC </MenuItem>
              <MenuItem value="mark.desc">Mark DESC </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Clear */}
        <Grid item xs={12} md={1}>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClearFilter}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentFilter;
