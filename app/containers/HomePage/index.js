/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as XLSX from 'xlsx';

import { Grid, TextField } from '@material-ui/core';
import ReposList from 'components/ReposList';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import $ from 'jquery';
import { transformFileAsync } from '@babel/core';
import { loadRepos } from '../App/actions';
import {
  changeSnackBar,
  changeUsername,
  defaultAction,
  mergeState,
  onChangeCloseSnackBar,
  getData,
} from './actions';
import CustomSnackbar from './CustomSnackbar';
import Feartures from './Feartures';
import Form from './Form';
import Loading from './Loading/Loading';
import reducer from './reducer';
import saga from './saga';
import Section from './Section';
import makeSelectHomePage, { makeSelectUsername } from './selectors';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    onDefaultAction,
    onMergeState,
    homePage,
    username,
    loading,
    error,
    repos,
    onSubmitForm,
    onChangeUsername,
    onChangeCloseSnackBar,
    onChangeSnackBar,
    onGetData,
  } = props;

  const { localData, localState } = homePage;
  const { isShowSearch, changeSnackbar, isLoading, dataStudent } = localState;
  console.log('changeSnackbar', changeSnackbar);
  console.log('localState_Home', localState);

  const inputEl = useRef(null);
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);
  const reposListProps = {
    loading,
    error,
    repos,
  };
  console.log('homePage', repos);

  function handleFile(file /* :File */) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils
        .sheet_to_json(ws, { header: 1, raw: false, dateNF: 'dd/mm/YYYY' })
        .filter(item => item.length !== 0);
      // const newData = formatTimekeepingToData(data);
      console.log('newData', data);
      // setLocalData({ ...localData, data: newData, file });
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }

  async function uploadFile(e) {
    const files = e.target.files[0];
    handleFile(files);
  }

  function filePicked(oEvent) {
    // Get The File From The Input
    const oFile = oEvent.target.files[0];
    const sFilename = oFile.name;
    // Create A File Reader HTML5
    const reader = new FileReader();

    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
      const data = e.target.result;
      const cfb = XLSX.CFB.read(data, { type: 'binary' });
      const wb = XLSX.parse_xlscfb(cfb);
      // Loop Over Each Sheet
      wb.SheetNames.forEach(function(sheetName) {
        // Obtain The Current Row As CSV
        const sCSV = XLSX.utils.make_csv(wb.Sheets[sheetName]);
        const oJS = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);

        $('#my_file_output').html(sCSV);
        console.log(oJS);
      });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
  }

  useEffect(() => {
    onGetData();
  }, []);

  async function Presidents() {
    console.log('in');
    /* fetch JSON data and parse */
    const url = 'https://sheetjs.com/data/executive.json';
    const raw_data = await fetch(url).then(res => res.json());
    console.log('raw_data', raw_data);
    /* filter for the Presidents */
    const prez = raw_data.filter(row =>
      row.terms.some(term => term.type === 'prez'),
    );

    /* flatten objects */
    // const rows = prez.map(row => ({
    //   name: row.name.first + ' ' + row.name.last,
    //   birthday: row.bio.birthday,
    // }));

    const rows = [
      {
        stt: '000012',
        name: 'tienkhanh',
      },
      {
        stt: '000012',
        name: 'tienkhanh',
      },
      {
        stt: '000012',
        name: 'tienkhanh',
      },
      {
        stt: '000012',
        name: 'tienkhanh',
      },
    ];

    /* generate worksheet and workbook */
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dates');

    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [['Name', 'Birthday']], {
      origin: 'A1',
    });

    /* calculate column width */
    const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
    worksheet['!cols'] = [{ wch: max_width }];

    /* create an XLSX file and try to save to Presidents.xlsx */
    XLSX.writeFile(workbook, 'Presidents.xlsx', { compression: true });
  }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          {/* Feartures component */}
          <Feartures
            onChangeSnackBar={data => {
              onChangeSnackBar(data);
            }}
            localState={localState}
            onMergeState={data => onMergeState(data)}
          />
          {/* Form search */}
          {isShowSearch && (
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Form
                  onSubmit={value => {
                    onSubmitForm(value);
                    onMergeState({ isLoading: true });
                  }}
                >
                  <TextField
                    margin="dense"
                    type="search"
                    variant="outlined"
                    fullWidth
                    id="username"
                    label="Enter your github name to search"
                    // defaultValue="Hello World"
                    InputProps={{
                      readOnly: false,
                    }}
                    value={username}
                    onChange={onChangeUsername}
                  />
                </Form>
                <ReposList {...reposListProps} />
              </Grid>
            </Grid>
          )}
        </Section>
        <button onClick={() => Presidents()}>AAAAAAAAAAaaaaa</button>
        {/* Snackbar đã customed */}
        <CustomSnackbar
          open={changeSnackbar.open}
          variant={changeSnackbar.variant}
          message={changeSnackbar.message}
          onClose={() => onChangeCloseSnackBar()}
        />
        {/* Loading */}
        {isLoading && <Loading />}
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onMergeState: data => {
      dispatch(mergeState(data));
    },
    onDefaultAction: data => {
      dispatch(defaultAction(data));
    },
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt, data) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos(data));
    },
    onChangeSnackBar: data => {
      dispatch(changeSnackBar(data));
    },
    onChangeCloseSnackBar: () => {
      dispatch(onChangeCloseSnackBar());
    },
    onGetData: data => {
      dispatch(getData(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
