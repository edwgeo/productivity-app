function Todoform ({latestTodo, handleChange, handleSubmit}) {
    
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Wash the dishes..."
                        value={latestTodo.name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div>
                <input
                    placeholder="Make sure to scrub them with the new sponge!"
                    value={latestTodo.desc}
                    onChange={handleChange}
                    name="desc"
                />
                </div>
                <div>
                <input
                    placeholder="45 minutes"
                    value={latestTodo.time}
                    onChange={handleChange}
                    name="time"
                />
                </div>
                <div>
                <input
                    type="submit"
                    value="submit"
                />
                </div>
            </form>
    )
}

export default Todoform