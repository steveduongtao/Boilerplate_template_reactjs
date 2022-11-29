import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { City } from '..';

function StudentFilter(props) {
  const { cityList } = props;
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search by name</InputLabel>
            <OutlinedInput label="searchByName" id="searchByName" endAdornment={<Search />} />
          </FormControl>
        </Grid>
        {/* Filter by city */}
        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="filterByCity">Filter by city</InputLabel>
            <Select labelId="filterByCity" id="filterByCity-select" lable="Filter by city">
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
            <Select labelId="sortBy" id="sort-select" value="">
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
        {/* Clear*/}
        <Grid item xs={12} md={1}>
          <Button variant="outlined" color="primary" fullWidth>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentFilter;
