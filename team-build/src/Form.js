import React from 'react'

function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const { name, value } = event.target;
        update(name, value);
    };

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Enter a Name'
                        maxLength='20'
                    />
                </label><br/>

                <label>Email
                    <input
                        type='text'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Enter an Email'
                        maxLength='50'
                    />
                </label><br/>

                <label>Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='backend engineer'>Backend Engineer</option>
                        <option value='frontend engineer'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label><br/>

                <div className='sumbit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    );
};

export default MemberForm