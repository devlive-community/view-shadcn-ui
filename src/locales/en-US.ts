export default {
    upload: {
        text: {
            placeholder: '<span class="text-blue-600"> Click upload</span> or drag and drop the file here',
            description: 'Support for a single or bulk upload.',
            success: 'Upload successfully',
            error: 'Upload failed'
        }
    },
    toolbar: {
        text: {
            ok: 'OK',
            cancel: 'Cancel'
        }
    },
    modal: {
        text: {
            ok: 'OK',
            cancel: 'Cancel'
        }
    },
    exception: {
        text: {
            401: {
                title: 'Not logged in',
                description: 'Sorry, you need to login first to access this page.'
            },
            403: {
                title: 'No permission to access this page',
                description: 'Sorry, you do not have permission to access this page.'
            },
            404: {
                title: 'The visited page does not exist',
                description: 'The page you are looking for does not exist.'
            },
            500: {
                title: 'There was an error on the server',
                description: 'Sorry, there was an error on the server.'
            }
        },
        action: {
            backHome: 'Back Home'
        }
    },
    select: {
        text: {
            placeholder: 'Please select a option'
        }
    },
    pagination: {
        text: {
            total: 'Total {{ total }} items',
            previous: 'Prev page',
            next: 'Next page',
            item: '{{ item }} items'
        }
    },
    dataBuilder: {
        placeholder: {
            width: 'Width',
            height: 'Height',
            backgroundImage: 'Background image'
        },
        text: {
            showGrid: 'Show grid',
            snapToGrid: 'Snap to grid',
            showRuler: 'Show ruler',
            dragResize: 'Drag resize',
            showGuidelines: 'Show guidelines',
            configureCenter: 'Configure center',
            basicConfigure: 'Basic configure',
            backgroundColor: 'Background color',
            backgroundImage: 'Background image',
            opacity: 'Opacity',
            xCoordinate: 'X Coordinate',
            yCoordinate: 'Y Coordinate',
            width: 'Width',
            height: 'Height'
        }
    },
    logger: {
        placeholder: {
            search: 'Search ...'
        },
        text: {
            allLevel: 'All level'
        }
    },
    countDown: {
        text: {
            day: 'Day',
            hour: 'Hour',
            minute: 'Minute',
            second: 'Second',
            pause: 'Pause',
            resume: 'Resume',
            reset: 'Reset',
            paused: 'Paused',
            completed: 'Completed',
            timeUp: 'Time up',
            running: 'Running'
        }
    },
    empty: {
        text: {
            retry: 'Retry',
            noData: 'No data',
            noDataDescription: 'No data was found'
        }
    },
    workflow: {
        placeholder: {
            search: 'Search ...',
            selectNode: 'Please select a node to configure'
        },
        text: {
            input: 'Input',
            output: 'Output',
            nodeConfigure: 'Node configure',
            dataConfigure: 'Data configure',
            nodeId: 'Node ID'
        },
        validated: {
            required: 'This is required'
        }
    },
    inputTag: {
        text: {
            placeholder: 'Please enter a tag'
        }
    },
    map: {
        placeholder: {
            key: 'Key',
            value: 'Value'
        },
        validated: {
            duplicate: 'Duplicate keys are not allowed',
            required: 'The key is required'
        }
    },
    dataFilter: {
        placeholder: {
            value: 'Enter a value',
            values: 'Enter values',
            number: 'Enter a number',
            numbers: 'Enter numbers',
            minNumber: 'Min number',
            maxNumber: 'Max number'
        },
        text: {
            eq: 'Equal to',
            neq: 'Not equal to',
            gt: 'Greater than',
            gte: 'Greater than or equal to',
            lt: 'Less than',
            lte: 'Less than or equal to',
            in: 'In ...',
            notIn: 'Not in ...',
            between: 'Between ... and ...',
            notBetween: 'Not between ... and ...',
            isNull: 'Is null',
            isNotNull: 'Is not null',
            like: 'Contains',
            notLike: 'Does not contain',
            regex: 'Matches',
            notRegex: 'Does not match',
            isTrue: 'Is True',
            isFalse: 'Is False',
            addCondition: 'Add condition',
            addGroup: 'Add group',
            and: 'And',
            or: 'Or',
        },
        validated: {
            invalid: 'Invalid field',
            required: 'The field is required',
            operatorRequired: 'The operator is required',
            valueRequired: 'The value is required',
            rangeRequired: 'The range is required',
            invalidRange: 'The range is invalid',
            invalidDateRange: 'The date range is invalid',
            invalidRegex: 'The regex is invalid'
        }
    },
    timePicker: {
        placeholder: {
            time: 'Please select a time'
        }
    }
}
