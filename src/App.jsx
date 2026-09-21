import PostCard from "./components/PostCard";

function App() {
    return (
        <div>
            <h1>Component Corner</h1>

            <PostCard
                name="AMD Ryzen 7 7800X3D"
                price="349.99"
                image="https://placehold.co/600x400"
                description="High-performance gaming CPU with 8 cores and 16 threads."
            />

            <PostCard
                name="NVIDIA GeForce RTX 4070"
                price="549.99"
                image="https://placehold.co/600x400"
                description="Powerful graphics card for gaming and high-quality PC performance."
            />

            <PostCard
                name="Corsair Vengeance 32GB DDR5"
                price="89.99"
                image="https://placehold.co/600x400"
                description="32GB DDR5 memory kit designed for modern gaming and productivity PCs."
            />
        </div>
    );
}

export default App;