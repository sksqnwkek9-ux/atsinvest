// JavaScript for any interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const homePage = document.getElementById('home-page');
    const guidePage = document.getElementById('guide-page');
    const simulationPage = document.getElementById('simulation-page');
    const arcadePage = document.getElementById('arcade-page');
    const autoPage = document.getElementById('auto-page');
    const articleDetailPage = document.getElementById('article-detail-page');
    const guideTabs = document.querySelectorAll('.guide-tab');
    const articleItems = document.querySelectorAll('.article-item');
    const backButton = document.getElementById('back-to-guide');
    const articleImages = document.getElementById('article-images');
    const articleDetailTitle = document.getElementById('article-detail-title');

    // Article image configurations
    const articleConfig = {
        'signup-pc': {
            title: '회원가입 PC',
            images: ['Image/regi1.png', 'Image/regi2.png', 'Image/regi3.png', 'Image/regi4.png', 'Image/regi5.png', 'Image/regi6.png', 'Image/regi7.png', 'Image/regi8.png']
        },
        'signup-mobile': {
            title: '회원가입 모바일',
            images: ['Image/mregi1.png', 'Image/mregi2.png', 'Image/mregi3.png', 'Image/mregi4.png', 'Image/mregi5.png', 'Image/mregi6.png', 'Image/mregi7.png', 'Image/mregi8.png', 'Image/mregi9.png', 'Image/mregi10.png', 'Image/mregi11.png', 'Image/mregi12.png']
        },
        'deposit-withdraw': {
            title: '입/출금 가이드',
            images: ['Image/gui1.png', 'Image/gui2.png', 'Image/gui3.png', 'Image/gui4.png', 'Image/gui5.png', 'Image/gui6.png', 'Image/gui7.png', 'Image/gui8.png', 'Image/gui9.png']
        },
        'futures-basics': {
            title: '선물거래란 무엇인가?',
            content: true
        },
        'futures-contract': {
            title: '선물계약의 구조와 특징',
            content: true
        },
        'leverage-margin': {
            title: '레버리지와 마진 이해하기',
            content: true
        },
        'long-short': {
            title: '롱 포지션과 숏 포지션',
            content: true
        },
        'liquidation': {
            title: '청산(Liquidation) 이해하기',
            content: true
        },
        'funding-fee': {
            title: '펀딩 수수료와 프리미엄',
            content: true
        },
        'risk-management': {
            title: '리스크 관리 전략',
            content: true
        }
    };

    // Function to show a specific page
    function showPage(page, updateHistory = true) {
        // Hide all pages
        homePage.classList.add('hidden');
        guidePage.classList.add('hidden');
        simulationPage.classList.add('hidden');
        arcadePage.classList.add('hidden');
        autoPage.classList.add('hidden');
        articleDetailPage.classList.add('hidden');

        // Show requested page
        if (page === 'home') {
            homePage.classList.remove('hidden');
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'home') {
                    link.classList.add('active');
                }
            });
            if (updateHistory) {
                history.pushState({ page: 'home' }, '', '#home');
            }
        } else if (page === 'guide') {
            guidePage.classList.remove('hidden');
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'guide') {
                    link.classList.add('active');
                }
            });
            if (updateHistory) {
                history.pushState({ page: 'guide' }, '', '#guide');
            }
        } else if (page === 'simulation') {
            simulationPage.classList.remove('hidden');
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'simulation') {
                    link.classList.add('active');
                }
            });
            if (updateHistory) {
                history.pushState({ page: 'simulation' }, '', '#simulation');
            }
        } else if (page === 'arcade') {
            arcadePage.classList.remove('hidden');
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'arcade') {
                    link.classList.add('active');
                }
            });
            if (updateHistory) {
                history.pushState({ page: 'arcade' }, '', '#arcade');
            }
        } else if (page === 'auto') {
            autoPage.classList.remove('hidden');
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'auto') {
                    link.classList.add('active');
                }
            });
            if (updateHistory) {
                history.pushState({ page: 'auto' }, '', '#auto');
            }
        } else if (page === 'article-detail') {
            articleDetailPage.classList.remove('hidden');
            // Don't update history here, it's handled by showArticleDetail
        }
    }

    // Article content data
    const articleContent = {
        'futures-basics': {
            title: '선물거래란 무엇인가?',
            sections: [
                {
                    heading: '선물거래의 정의',
                    content: '선물거래(Futures Trading)는 미래의 특정 시점에 미리 정해진 가격으로 자산을 매수하거나 매도하는 계약을 거래하는 것입니다. 암호화폐 선물거래는 현물거래와 달리 실제 코인을 보유하지 않고도 가격 변동에 투자할 수 있는 파생상품입니다.'
                },
                {
                    heading: '선물거래의 핵심 개념',
                    content: '선물거래는 레버리지를 통해 소액의 자본으로도 큰 규모의 포지션을 취할 수 있습니다. 예를 들어, 10배 레버리지를 사용하면 1,000 USDT로 10,000 USDT 규모의 포지션을 열 수 있습니다. 이를 통해 수익 기회가 확대되지만, 동시에 손실 위험도 그만큼 증가합니다.'
                },
                {
                    heading: '선물거래의 장점',
                    content: '1. 양방향 수익 가능: 상승장과 하락장 모두에서 수익 창출 가능\n2. 레버리지 활용: 소액 자본으로 큰 규모 거래 가능\n3. 헷징(Hedging): 기존 포지션의 리스크를 상쇄하는 보험 역할\n4. 유동성: 24시간 거래 가능하며 높은 유동성 제공'
                },
                {
                    heading: '선물거래의 위험',
                    content: '선물거래는 높은 수익 가능성과 함께 상응하는 위험을 수반합니다. 레버리지 사용 시 작은 가격 변동도 큰 손실로 이어질 수 있으며, 청산(Liquidation) 위험이 항상 존재합니다. 충분한 학습과 리스크 관리 없이는 투자하지 않는 것이 좋습니다.'
                }
            ]
        },
        'futures-contract': {
            title: '선물계약의 구조와 특징',
            sections: [
                {
                    heading: '선물계약의 기본 구조',
                    content: '선물계약은 계약 규격(Contract Size), 만기일(Expiration Date), 기초자산(Underlying Asset)으로 구성됩니다. 암호화폐 선물의 경우 대부분 영구선물(Perpetual Futures) 형태로 만기일이 없으며, 펀딩 수수료를 통해 현물 가격과의 괴리를 조정합니다.'
                },
                {
                    heading: '영구선물(Perpetual Futures)',
                    content: '영구선물은 만기일이 없는 선물계약으로, 거래자가 원하는 기간 동안 포지션을 보유할 수 있습니다. 펀딩 수수료(Funding Fee)가 8시간마다 지급되거나 차감되며, 이는 시장의 롱/숏 비율에 따라 결정됩니다. 롱 포지션이 많으면 롱 포지션 보유자가 숏 포지션 보유자에게 펀딩 수수료를 지급합니다.'
                },
                {
                    heading: '계약 규격과 가격 단위',
                    content: '선물계약은 계약 단위(Contract Unit)로 거래됩니다. 예를 들어, BTC/USDT 선물의 경우 1 계약 = 0.001 BTC일 수 있습니다. 최소 주문 단위, 가격 변동 단위(Tick Size), 최대 포지션 한도 등은 거래소마다 다르므로 반드시 확인해야 합니다.'
                },
                {
                    heading: '마진과 포지션 크기',
                    content: '선물거래에서 마진(Margin)은 포지션을 열고 유지하기 위해 필요한 담보입니다. 초기 마진(Initial Margin)은 포지션을 열 때 필요하며, 유지 마진(Maintenance Margin)은 포지션을 유지하기 위한 최소 마진입니다. 마진이 유지 마진 이하로 떨어지면 강제 청산이 발생할 수 있습니다.'
                }
            ]
        },
        'leverage-margin': {
            title: '레버리지와 마진 이해하기',
            sections: [
                {
                    heading: '레버리지의 개념',
                    content: '레버리지(Leverage)는 자신의 자본보다 큰 규모의 거래를 할 수 있게 해주는 도구입니다. 10배 레버리지는 자신의 자본의 10배 규모로 거래할 수 있다는 의미입니다. 레버리지가 높을수록 수익과 손실이 모두 증폭됩니다.'
                },
                {
                    heading: '마진의 종류',
                    content: '1. 초기 마진(Initial Margin): 포지션을 열 때 필요한 최소 자금\n2. 유지 마진(Maintenance Margin): 포지션을 유지하기 위한 최소 자금\n3. 격리 마진(Isolated Margin): 특정 포지션에만 할당된 마진\n4. 교차 마진(Cross Margin): 모든 포지션에서 공유되는 마진'
                },
                {
                    heading: '레버리지 선택 전략',
                    content: '레버리지는 낮을수록 안전하지만 수익 기회는 줄어듭니다. 초보자는 2-5배의 낮은 레버리지로 시작하는 것을 권장합니다. 경험이 쌓이면 점진적으로 레버리지를 높일 수 있지만, 항상 리스크 관리가 우선되어야 합니다. 높은 레버리지는 작은 가격 변동으로도 큰 손실을 초래할 수 있습니다.'
                },
                {
                    heading: '마진 비율 계산',
                    content: '마진 비율(Margin Ratio) = (자산 가치 / 사용된 마진) × 100%\n마진 비율이 100%에 가까워질수록 청산 위험이 높아집니다. 일반적으로 마진 비율이 150% 이하로 떨어지면 추가 마진을 요구하거나 강제 청산이 발생할 수 있습니다. 항상 마진 비율을 모니터링하고 여유 자금을 확보해두는 것이 중요합니다.'
                }
            ]
        },
        'long-short': {
            title: '롱 포지션과 숏 포지션',
            sections: [
                {
                    heading: '롱 포지션(Long Position)',
                    content: '롱 포지션은 자산의 가격이 상승할 것이라고 예상하여 취하는 포지션입니다. "롱을 잡는다"는 것은 자산을 매수하는 것을 의미합니다. 가격이 상승하면 수익을 얻고, 하락하면 손실이 발생합니다. 일반적으로 상승장에서 롱 포지션을 취합니다.'
                },
                {
                    heading: '숏 포지션(Short Position)',
                    content: '숏 포지션은 자산의 가격이 하락할 것이라고 예상하여 취하는 포지션입니다. "숏을 잡는다"는 것은 자산을 매도하는 것을 의미합니다. 가격이 하락하면 수익을 얻고, 상승하면 손실이 발생합니다. 하락장에서도 수익을 낼 수 있는 유일한 방법입니다.'
                },
                {
                    heading: '롱과 숏의 차이점',
                    content: '롱 포지션은 가격 상승에 베팅하는 것이고, 숏 포지션은 가격 하락에 베팅하는 것입니다. 선물거래의 가장 큰 장점은 숏 포지션을 통해 하락장에서도 수익을 낼 수 있다는 점입니다. 현물거래는 가격이 오를 때만 수익을 낼 수 있지만, 선물거래는 양방향으로 수익 기회가 있습니다.'
                },
                {
                    heading: '포지션 전환 전략',
                    content: '시장 상황에 따라 롱과 숏을 전환하는 것이 중요합니다. 강한 상승 추세에서는 롱 포지션을, 하락 추세나 조정 구간에서는 숏 포지션을 고려할 수 있습니다. 하지만 단순히 추세만 보고 판단하는 것은 위험하므로, 기술적 분석과 기본적 분석을 종합하여 판단해야 합니다.'
                }
            ]
        },
        'liquidation': {
            title: '청산(Liquidation) 이해하기',
            sections: [
                {
                    heading: '청산이란?',
                    content: '청산(Liquidation)은 포지션의 마진이 유지 마진 이하로 떨어질 때 거래소가 강제로 포지션을 종료시키는 것입니다. 이는 거래소와 다른 거래자들을 보호하기 위한 메커니즘입니다. 청산이 발생하면 해당 포지션의 모든 마진이 손실로 처리됩니다.'
                },
                {
                    heading: '청산 가격 계산',
                    content: '청산 가격은 레버리지, 진입 가격, 마진 비율에 따라 결정됩니다.\n롱 포지션 청산 가격 = 진입 가격 × (1 - 1/레버리지 × 마진 비율)\n숏 포지션 청산 가격 = 진입 가격 × (1 + 1/레버리지 × 마진 비율)\n예를 들어, 10배 레버리지로 롱 포지션을 열었을 때, 가격이 약 10% 하락하면 청산 위험이 있습니다.'
                },
                {
                    heading: '청산을 피하는 방법',
                    content: '1. 적절한 레버리지 사용: 낮은 레버리지는 청산 가격과의 여유를 확보\n2. 충분한 마진 확보: 여유 자금을 항상 확보하여 마진 비율 유지\n3. 스탑로스 설정: 손실을 제한하여 청산 전에 포지션 종료\n4. 포지션 크기 관리: 전체 자본의 일정 비율만 사용하여 리스크 분산'
                },
                {
                    heading: '부분 청산과 전체 청산',
                    content: '일부 거래소는 부분 청산(Partial Liquidation) 시스템을 운영합니다. 마진이 부족할 때 포지션의 일부만 청산하여 나머지 포지션을 유지할 수 있게 합니다. 하지만 대부분의 경우 전체 청산이 발생하므로, 항상 충분한 마진을 유지하는 것이 가장 중요합니다.'
                }
            ]
        },
        'funding-fee': {
            title: '펀딩 수수료와 프리미엄',
            sections: [
                {
                    heading: '펀딩 수수료(Funding Fee)란?',
                    content: '펀딩 수수료는 영구선물에서 현물 가격과 선물 가격의 괴리를 조정하기 위해 8시간마다 지급되거나 차감되는 수수료입니다. 펀딩 비율(Funding Rate)이 양수이면 롱 포지션 보유자가 숏 포지션 보유자에게 지급하고, 음수이면 그 반대입니다.'
                },
                {
                    heading: '펀딩 비율 계산',
                    content: '펀딩 비율 = 프리미엄 지수 / 8\n프리미엄 지수 = (선물 가격 - 현물 가격) / 현물 가격\n펀딩 비율이 높을수록 롱 포지션 보유자의 비용이 증가합니다. 일반적으로 펀딩 비율이 0.1% 이상이면 롱 포지션 보유자에게 불리하며, -0.1% 이하면 숏 포지션 보유자에게 불리합니다.'
                },
                {
                    heading: '프리미엄(Premium)',
                    content: '프리미엄은 선물 가격이 현물 가격보다 높은 정도를 나타냅니다. 프리미엄이 높다는 것은 시장 참여자들이 미래 가격 상승을 기대한다는 의미입니다. 반대로 프리미엄이 음수(할인)이면 시장이 하락을 예상한다는 의미입니다.'
                },
                {
                    heading: '펀딩 수수료 전략',
                    content: '펀딩 수수료를 고려한 거래 전략을 수립할 수 있습니다. 펀딩 비율이 매우 높을 때(예: 0.5% 이상)는 롱 포지션보다 숏 포지션이 유리할 수 있습니다. 하지만 펀딩 수수료만 보고 거래하는 것은 위험하므로, 시장 분석과 함께 종합적으로 판단해야 합니다.'
                }
            ]
        },
        'risk-management': {
            title: '리스크 관리 전략',
            sections: [
                {
                    heading: '리스크 관리의 중요성',
                    content: '선물거래에서 리스크 관리는 수익보다 더 중요합니다. 한 번의 큰 손실은 여러 번의 수익을 무효화시킬 수 있기 때문입니다. 체계적인 리스크 관리 없이는 장기적으로 수익을 내기 어렵습니다.'
                },
                {
                    heading: '포지션 크기 관리',
                    content: '전체 자본의 일정 비율(예: 1-5%)만 단일 포지션에 투자하는 것이 좋습니다. 이를 통해 한 포지션의 손실이 전체 자본에 치명적인 영향을 미치지 않도록 할 수 있습니다. 레버리지를 사용하더라도 실제 리스크는 포지션 크기로 제어할 수 있습니다.'
                },
                {
                    heading: '스탑로스(Stop Loss) 설정',
                    content: '스탑로스는 미리 정한 손실 한도에 도달하면 자동으로 포지션을 종료하는 주문입니다. 스탑로스를 설정하면 예상치 못한 큰 손실을 방지할 수 있습니다. 일반적으로 진입 가격의 2-5% 수준에서 스탑로스를 설정하는 것이 권장됩니다.'
                },
                {
                    heading: '테이크 프로핏(Take Profit)',
                    content: '테이크 프로핏은 목표 수익에 도달하면 자동으로 포지션을 종료하는 주문입니다. 수익을 확정하는 것이 중요하며, 탐욕으로 인해 수익을 놓치는 것을 방지할 수 있습니다. 리스크 대비 보상 비율(Risk/Reward Ratio)을 1:2 이상으로 설정하는 것이 좋습니다.'
                },
                {
                    heading: '다각화와 분산투자',
                    content: '여러 포지션에 분산 투자하여 리스크를 분산시킬 수 있습니다. 하지만 상관관계가 높은 자산에 동시에 투자하는 것은 분산 효과가 없으므로 주의해야 합니다. 또한 한 번에 너무 많은 포지션을 관리하는 것도 어려우므로 적절한 균형을 유지해야 합니다.'
                }
            ]
        }
    };

    // Function to show article detail
    function showArticleDetail(articleId, updateHistory = true) {
        const config = articleConfig[articleId];
        if (!config) return;

        // Set title
        articleDetailTitle.textContent = config.title;

        // Clear content
        articleImages.innerHTML = '';

        // Check if it's a content-based article
        if (config.content && articleContent[articleId]) {
            const content = articleContent[articleId];
            const contentContainer = document.createElement('div');
            contentContainer.className = 'article-content';

            content.sections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'article-content-section';
                
                const heading = document.createElement('h3');
                heading.className = 'article-content-heading';
                heading.textContent = section.heading;
                
                const paragraph = document.createElement('p');
                paragraph.className = 'article-content-text';
                paragraph.textContent = section.content;
                paragraph.style.whiteSpace = 'pre-line';
                
                sectionDiv.appendChild(heading);
                sectionDiv.appendChild(paragraph);
                contentContainer.appendChild(sectionDiv);
            });

            articleImages.appendChild(contentContainer);
        } else if (config.images) {
            // Image-based article
            config.images.forEach((imageName, index) => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'article-image-item';
                
                const img = document.createElement('img');
                img.src = imageName;
                img.alt = `${config.title} ${index + 1}`;
                img.className = 'article-image';
                
                imgContainer.appendChild(img);
                articleImages.appendChild(imgContainer);

                // Add signup link after the first image (regi1.png or mregi1.png)
                // Only for signup articles, not for deposit-withdraw
                if (index === 0 && articleId !== 'deposit-withdraw') {
                    const signupLinkContainer = document.createElement('div');
                    signupLinkContainer.className = 'article-signup-link';
                    
                    const linkText = document.createElement('span');
                    linkText.className = 'signup-link-text';
                    
                    // Create text parts
                    const clickText = document.createElement('span');
                    clickText.textContent = '클릭 -> ';
                    
                    const signupLink = document.createElement('a');
                    signupLink.href = 'https://www.orangex.com/register?i=ats';
                    signupLink.target = '_blank';
                    signupLink.textContent = '회원가입 바로가기';
                    
                    linkText.appendChild(clickText);
                    linkText.appendChild(signupLink);
                    signupLinkContainer.appendChild(linkText);
                    articleImages.appendChild(signupLinkContainer);
                }
            });
        }

        // Show detail page
        homePage.classList.add('hidden');
        guidePage.classList.add('hidden');
        simulationPage.classList.add('hidden');
        arcadePage.classList.add('hidden');
        autoPage.classList.add('hidden');
        articleDetailPage.classList.remove('hidden');
        
        // Update history
        if (updateHistory) {
            history.pushState({ page: 'article-detail', articleId: articleId }, '', `#article-detail/${articleId}`);
        }
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        const state = event.state || { page: 'home' };
        if (state.page === 'article-detail' && state.articleId) {
            showArticleDetail(state.articleId, false);
        } else {
            showPage(state.page, false);
        }
    });

    // Initialize: Show home page by default
    const hash = window.location.hash;
    if (hash === '#guide') {
        showPage('guide', false);
    } else if (hash === '#simulation') {
        showPage('simulation', false);
    } else if (hash === '#arcade') {
        showPage('arcade', false);
    } else if (hash === '#auto') {
        showPage('auto', false);
    } else if (hash.startsWith('#article-detail/')) {
        // Extract article ID from hash
        const articleId = hash.split('/')[1];
        if (articleId && articleConfig[articleId]) {
            showArticleDetail(articleId, false);
        } else {
            showPage('home', false);
            history.replaceState({ page: 'home' }, '', '#home');
        }
    } else {
        showPage('home', false);
        if (!hash) {
            history.replaceState({ page: 'home' }, '', '#home');
        }
    }

    // Logo click handler - go to home
    const logoHome = document.getElementById('logo-home');
    if (logoHome) {
        logoHome.addEventListener('click', function() {
            showPage('home');
        });
        logoHome.style.cursor = 'pointer';
    }

    // Navigation link handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    // Guide tab handlers
    guideTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            guideTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            articleItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Article item click handlers
    articleItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = this.getAttribute('data-article');
            if (articleId) {
                sessionStorage.setItem('lastArticleId', articleId);
                showArticleDetail(articleId);
            }
        });
    });

    // Back button handler (use browser back)
    backButton.addEventListener('click', function() {
        history.back();
    });

    // Back to list button handler (bottom button)
    const backToListBtn = document.getElementById('back-to-list-btn');
    if (backToListBtn) {
        backToListBtn.addEventListener('click', function() {
            history.back();
        });
    }

    // Platform info button handler
    const platformInfoBtn = document.getElementById('platform-info-btn');
    if (platformInfoBtn) {
        platformInfoBtn.addEventListener('click', function() {
            window.open('https://coinmarketcap.com/ko/exchanges/orangex/?type=perpetual', '_blank');
        });
    }

    // Signup button handler
    const signupBtn = document.getElementById('signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            window.open('https://www.orangex.com/register?i=ats', '_blank');
        });
    }

    // Inquiry button handler
    const inquiryBtn = document.getElementById('inquiry-btn');
    if (inquiryBtn) {
        inquiryBtn.addEventListener('click', function() {
            window.open('http://t.me/amtoosa', '_blank');
        });
    }

    // Guide button handler
    const guideBtn = document.getElementById('guide-btn');
    if (guideBtn) {
        guideBtn.addEventListener('click', function() {
            // Navigate to guide page
            showPage('guide');
            // Update navigation link
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === 'guide') {
                    link.classList.add('active');
                }
            });
        });
    }

    // Arcade Game Logic
    const gameScreen = document.getElementById('game-screen');
    const gameInstruction = document.getElementById('game-instruction');
    const startGameBtn = document.getElementById('start-game-btn');
    const resetGameBtn = document.getElementById('reset-game-btn');
    const gameResult = document.getElementById('game-result');
    const bestTimeEl = document.getElementById('best-time');
    const avgTimeEl = document.getElementById('avg-time');
    const attemptsEl = document.getElementById('attempts');

    let gameState = 'waiting'; // waiting, ready, green, clicked
    let startTime = 0;
    let reactionTime = 0;
    let times = JSON.parse(localStorage.getItem('reactionTimes') || '[]');
    let currentTimeout = null;

    // Load saved stats
    function loadStats() {
        if (times.length > 0) {
            const best = Math.min(...times);
            const avg = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
            bestTimeEl.textContent = best + 'ms';
            avgTimeEl.textContent = avg + 'ms';
        }
        attemptsEl.textContent = times.length;
    }

    // Save time
    function saveTime(time) {
        times.push(time);
        localStorage.setItem('reactionTimes', JSON.stringify(times));
        loadStats();
    }

    // Reset stats
    if (resetGameBtn) {
        resetGameBtn.addEventListener('click', function() {
            times = [];
            localStorage.removeItem('reactionTimes');
            bestTimeEl.textContent = '-';
            avgTimeEl.textContent = '-';
            attemptsEl.textContent = '0';
            gameResult.textContent = '';
        });
    }

    // Start game
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            if (gameState === 'waiting' || gameState === 'clicked') {
                startGame();
            }
        });
    }

    function startGame() {
        gameState = 'ready';
        gameInstruction.style.display = 'none';
        gameResult.textContent = '';
        gameScreen.style.backgroundColor = '#f44336';
        gameScreen.style.cursor = 'not-allowed';
        startGameBtn.textContent = '대기 중...';
        startGameBtn.disabled = true;

        // Random delay between 1-5 seconds
        const delay = Math.random() * 4000 + 1000;
        
        currentTimeout = setTimeout(function() {
            if (gameState === 'ready') {
                gameState = 'green';
                gameScreen.style.backgroundColor = '#4caf50';
                gameScreen.style.cursor = 'pointer';
                startTime = Date.now();
            }
        }, delay);
    }

    // Click handler
    if (gameScreen) {
        gameScreen.addEventListener('click', function() {
            if (gameState === 'green') {
                reactionTime = Date.now() - startTime;
                gameState = 'clicked';
                
                clearTimeout(currentTimeout);
                gameScreen.style.backgroundColor = '#2196f3';
                gameScreen.style.cursor = 'default';
                
                let message = '';
                let color = '#333';
                
                if (reactionTime < 200) {
                    message = '🚀 엄청 빠르네요! ' + reactionTime + 'ms';
                    color = '#4caf50';
                } else if (reactionTime < 300) {
                    message = '⚡ 빠릅니다! ' + reactionTime + 'ms';
                    color = '#8bc34a';
                } else if (reactionTime < 400) {
                    message = '👍 좋습니다! ' + reactionTime + 'ms';
                    color = '#ff9800';
                } else if (reactionTime < 500) {
                    message = '😊 괜찮습니다! ' + reactionTime + 'ms';
                    color = '#ff9800';
                } else {
                    message = '💪 더 연습하세요! ' + reactionTime + 'ms';
                    color = '#f44336';
                }
                
                gameResult.innerHTML = '<div style="font-size: 24px; font-weight: 600; color: ' + color + '; margin-top: 20px;">' + message + '</div>';
                
                saveTime(reactionTime);
                
                startGameBtn.textContent = '다시 시작';
                startGameBtn.disabled = false;
            } else if (gameState === 'ready') {
                // Clicked too early
                clearTimeout(currentTimeout);
                gameState = 'waiting';
                gameScreen.style.backgroundColor = '#9e9e9e';
                gameResult.innerHTML = '<div style="font-size: 20px; color: #f44336; margin-top: 20px;">❌ 너무 빨랐습니다! 초록색이 되면 클릭하세요.</div>';
                startGameBtn.textContent = '게임 시작';
                startGameBtn.disabled = false;
            }
        });
    }

    // Initialize stats
    loadStats();

    // Auto trading agreement button
    const agreeBtn = document.getElementById('agree-btn');
    if (agreeBtn) {
        agreeBtn.addEventListener('click', function() {
            alert('확약서 작성 기능은 준비 중입니다.\n자동매매 사용 전 반드시 위의 내용을 확인하고 동의해주세요.');
        });
    }
});
