<script>
	// Functionality for language selection
    import { t } from '$lib/translations';
    // inspiration https://kde.org/cs/donate/
</script>

<div class="donation-container">
    <p>{$t('all.donateText')}</p>
    <div class="three-columns">
        <div class="left">
            <h1>Donorbox</h1>
        </div>
        <div class="middle">
            <h1><a href="https://ko-fi.com/neodb">Ko-Fi</a></h1>
        </div>
        <div class="right">
            <h1>Paypal</h1>
            <p>Security concern here: The form action uses a hardcoded PayPal URL with a specific hosted_button_id. This could be a security concern if the ID is sensitive or if it needs to be changed without modifying the code. Consider using environment variables or a secure configuration management system to handle such sensitive data.</p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="2K7H7J76TGJU4" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" src="https://www.paypal.com/en_CZ/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    </div>
</div>

<style>
    .donation-container {
        margin:auto;
    }

    .three-columns {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .left {
        flex: 1;
    }

    .middle {
        flex: 1;
    }

    .right {
        flex: 1;
    }

</style>