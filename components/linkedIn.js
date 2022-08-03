
const LinkedIn = () => {
    return (
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="christopher-sharpe-4b653980" data-version="v1">
        <h1>My LinkedIn</h1>
        <br></br>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        <a class="badge-base__link LI-simple-link" href={process.env.LinkedIn}></a>
      </div>
    )
}

export default LinkedIn