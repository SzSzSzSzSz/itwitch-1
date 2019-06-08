import React from 'react'

export function StreamerInfo(props) {

    return (
        <div className="row">
            <div className="col-3 col-sm-4">
                <h3>{ props.nick }</h3>
            </div>
            <div className="col-6 col-sm-6">
                <h3>{ props.stream_title }</h3>
            </div>
            <div className="col-3 col-sm-2">
                <span  className="badge badge-pill badge-info"> {props.view_count }</span>
            </div>
        </div>
    )
}
