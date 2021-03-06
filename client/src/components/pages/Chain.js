import React from 'react'
import BlocksFilter from '../transactions/BlocksFilter'
import Blocks from '../transactions/Blocks'
import BlockTransactions from '../transactions/BlockTransactions'

const Chain = () => {
    return (
        <div className="grid-2 container">
            <div>
                <BlocksFilter/>
                <Blocks/>
            </div>
            <div>
                <BlockTransactions/>
            </div>
        </div>
    )
}

export default Chain
