+++
title = "Shannon Entropy"
description = "This is an extension of the notes that I wrote for my talk at the \"What is...?\" seminar organized by the Math Club at ISI Bangalore."
type = ["blogs","blog"]
# tags = [
#     "go",
#     "golang",
#     "templates",
#     "themes",
#     "development",
# ]
date = "2024-01-24"
# categories = [
#     "Development",
#     "golang",
# ]
# series = ["Hugo 101"]
[ author ]
  name = "Hrishik Koley"
+++

{{< katex >}}

## Motivation

Entropy is a concept that is most commonly associated with a state of disorder, randomness, or uncertainty. The term and the concept are used in diverse fields, from classical thermodynamics, to the microscopic description of nature in statistical physics, and to the principles of information theory.

What we will be talking about is entropy in context of information theory. That's where Shannon entropy comes in. But before understanding Shannon entropy, we need to understand what we mean by self-information.

Self-information, put simply, is the information contained in some event or some statement. The more the self-information of something, the more we know about it, and in turn the lesser it's entropy.

We consider an example now. For ease of understanding, we consider the average information content or self-information of a text. The information content of a text depends on how common the words in the text are with respect to global usage of those words. Now consider this example, \"Next sunday morning\" has lesser self-information (more entropy) than \"Large Hadron Collider\". Each of the words in \"Large Hadron Collider\" has greater self-information than every word in \"Next sunday morning\" (except maybe \"large\").

## Self-Information or Shannon Information

Formally stating, Shannon information is a basic quantity derived from the probability of a particular event occurring from a random variable. The Shannon information can be interpreted as quantifying the level of "surprise" of a particular outcome.

Claude Shannon's definition of self-information was chosen to meet several axioms:

1. An event with probability 100% is perfectly unsurprising and yields no information.
2. The less probable an event is, the more surprising it is and the more information it yields.
3. If two independent events are measured separately, the total amount of information is the sum of the self-informations of the individual events.

There exists a unique function of probability that meets these three axioms, up to a multiplicative scaling factor $b > 1$. Given an event $x$ with probability $P(x)$, the information content is defined as follows:

$$I(x) := -log_b[P(x)]$$

For different choices of $b$, we have different units of information, such as, when $b=2$, we use the unit _shannon (Sh)_; when $b=e$, we use _natural unit of information (nat)_; and when $b=10$, the unit is _hartley (Hart)_.

Formally, a given random variable $X$ with _probability mass function (pmf)_, represented by, $p_X(x)$, the self-information measuring $X$'s probability of having outcome $x$ is defined as:

$$I_X(x):=-log[p_X(x)]=log(\frac{1}{p_X(x)})$$

**Note:** $I_X(x)$ is used to represent self-information, and $h_X(x)$ is used to represent self-entropy.

## What is Shannon Entropy?

Let, $S=$\{$s_i$\}$_{i=1}^n$ be a finite set (called the alphabet in communication theory). Let, $X$ be a discrete random variable, taking values in $S$ with a probability function $\mathbb{P}:S \longrightarrow [0,1]$. Let, $\mathbb{P}(X=s_i)=p_i$.

**Note:** The map $\mathbb{P}$ should actually be from a $\sigma$-algebra, and not the set $S$. But we don't need to look at any $\sigma$-algebra since the distribution of a discrete random variable is completely specified if we know the probabilities at each of its points.

Then the Shannon entropy $H$ associated with $X$ is defined as:

$$H_n(X)=-\sum_{i=1}^np_ilogp_i$$

The base of the logarithm is intentionally left vague, as the Shannon entropy can take a constant multiplicative factor without changing what it does, as we saw in self-informatoion.

Before diving deeper, I should state that we shall:

- Mention the base we are working with, when required.
- Drop the subscript n, when not ambiguous.
- Sometimes write the Shannon entropy for a probability distribution $p=(p_1,p_2,...,p_n)$ as $H(p)$ or $H(p_1,p_2,...,p_n)$.

**Note:** We make a slight abuse of terminology. The abuse is that $S \neq$ \{1,2,...,n\}. Rather $S$ is in bihection with \{1,2,...,n\} and $p_i$ is the probability of sampling the point $i$, and then this is pulled back to $S$ via the bijection for a probability distribution on $S$.

## Shannon's characterization

## The surprise characterization