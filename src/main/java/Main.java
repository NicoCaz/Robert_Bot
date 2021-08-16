import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.utils.Compression;
import net.dv8tion.jda.api.utils.cache.CacheFlag;

import javax.security.auth.login.LoginException;

public class Main {

    public static void main(String[] args) {
        JDABuilder builder = JDABuilder.createDefault("NzA0NDY0NzIwNzM1ODk1NzAy.Xqdh5Q.4jDaxgKcR1F4OLFcCFu1MSCw8rQ");

        // Disable parts of the cache
        builder.disableCache(CacheFlag.MEMBER_OVERRIDES, CacheFlag.VOICE_STATE);
        // Enable the bulk delete event
        builder.setBulkDeleteSplittingEnabled(false);
        // Disable compression (not recommended)
        builder.setCompression(Compression.NONE);
        // Set activity (like "playing Something")
        builder.setActivity(Activity.watching("TV"));

        try {
            builder.build();
        } catch (LoginException e) {
            e.printStackTrace();
        }
    }


}
