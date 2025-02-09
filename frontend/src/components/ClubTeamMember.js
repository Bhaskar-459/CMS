function ClubTeamMember() {
    return (
        <div className="flex flex-col items-center mb-8 mx-4 w-3/12">
            <img className="w-[150px] rounded-full shadow-xl" src={require("../images/gdsc-logo.png")}></img>
            <h3 className="font-bold text-2xl">Shanmukh Sai</h3>
            <h5 className="text-xl">Web Lead</h5>
        </div>
    );
}

export default ClubTeamMember;