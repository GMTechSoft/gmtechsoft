"use client";

import styles from "./FilterBar.module.scss";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.chip} ${activeCategory === category ? styles.active : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.sort}>
        <span className={styles.sortLabel}>Sort by:</span>
        <select 
          className={styles.dropdown}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Live on Play Store">Live on Play Store</option>
          <option value="Self-Written">Self-Written</option>
        </select>
      </div>
    </div>
  );
}
