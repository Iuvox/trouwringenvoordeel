const getSplitTest = () => {

    if (localStorage.getItem('splitTesting')) {
        return localStorage.getItem('splitTesting')
    }

    const maxnumber = 524288
    const random = Math.floor(Math.random() * 524288)

    const ab = (random < (0.5 * maxnumber))

    localStorage.setItem('splitTesting', ab)
    return ab
}

export default getSplitTest