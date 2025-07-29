export default function Mainn() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="ingredient here..."
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}