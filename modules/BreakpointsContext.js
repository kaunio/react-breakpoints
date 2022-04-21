import React from 'react'

const BreakpointsContext = React.createContext()

const { Provider, Consumer } = BreakpointsContext

Provider.displayName = 'ReactBreakpoints.Provider'
Consumer.displayName = 'ReactBreakpoints.Consumer'

export { Provider, Consumer }
export default BreakpointsContext
