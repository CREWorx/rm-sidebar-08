from googlesearch import search

def main():
    # Prompt the user for a query and number of results
    query = input("Enter your search query: ")
    num_results = int(input("Enter the number of results to fetch (default is 5): ") or 5)

    # Perform the search and limit results manually
    results = []
    for idx, url in enumerate(search(query), start=1):
        if idx > num_results:
            break
        results.append(url)

    # Print the results
    print("\nSearch Results:")
    for idx, result in enumerate(results, start=1):
        print(f"{idx}. {result}")

if __name__ == "__main__":
    main()
