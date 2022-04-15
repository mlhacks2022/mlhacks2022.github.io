import React from 'react'
import Loader from 'react-loader-spinner'

export default function PageLoading() {
    return (
        <div className="page-container">
            <Loader
                type="BallTriangle"
                color="rgb(24, 40, 255)"
                height={200}
                width={100}
                timeout={999999}
            />
        </div>
    )
}