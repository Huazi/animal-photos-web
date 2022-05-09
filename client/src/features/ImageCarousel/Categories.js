
import React from 'react';
const Categories = (props) => {
    console.log(props.categories);
    return (
        <div class="btn-toolbar center" role="toolbar">
            {props.categories && (
                props.categories.map(item => {
                    return (
                        <button
                        className={`m-3 btn btn-sm ${item.selected?"btn-primary":"btn-secondary"}`}
                        onClick={() => {
                            props.clickEvent(item.categoryId);
                        }}>
                            {item.category}
                        </button>
                    )
                })
            )
            }
        </div>
    );
};
export default Categories;
