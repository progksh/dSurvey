let state = {
  app: {
    title: 'D SURVEY',
    tokenAddress: '0xa3fd698a03f85560444799117a05bc1f5bf6ae89',
    // tokenAddress2: '0xaa0d1457840ceba75194f68abe70a1a6feaeb7c3',
    ctrlAddress: '0x37caf56bd152a7831fe39dd78c1d217bde8debe5',
    // ctrlAddress2: '0xed57661f7178f5469374973571ada7e8369019b5',
    loading: false
    // ctrlAddress: '0xe838389530dae906f2ffb6ab577bc98a19985a89'
  },
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  surveyCtrlInstance: null,
  surveyInstance: [],
  selectedSurveyInstance: null,
  walletInstance: null,
  ctrl: {
    allowance: 0,
    categories: [],
    surveys: []
  },
  wallet: {
    value: 0
  },
  createView: {
    address: '',
    instance: null,
    questions: [],
    options: []
  }
}

export default state
